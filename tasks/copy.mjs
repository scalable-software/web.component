#! /usr/bin/env node

import { copyFile } from "node:fs/promises";
import { readdir } from "node:fs/promises";
import { existsSync, mkdirSync } from "node:fs";
import { exit } from "node:process";

let getFilenamePattern = (path) => path.split("/").pop();
let getDirectory = (path) => path.replace(path.split("/").pop(), "");

let getSubDirectories = async (path) => {
  let allDirectories = [path];

  try {
    const items = await readdir(path, { withFileTypes: true });
    const directories = items
      .filter((item) => item.isDirectory())
      .map((directory) => `${path}${directory.name}/`);

    allDirectories.push(...directories);

    for (const directory of directories) {
      const subDirs = await getSubDirectories(directory);
      allDirectories.push(...subDirs);
    }
  } catch (error) {
    console.error("Error reading directory:", error);
  }

  return allDirectories;
};

let endsWithGlobstar = (path) => /\*\*\/$/.test(path);

let removeGlobstar = (path) => path.replace(new RegExp("\\*\\*/$", "g"), "");

let convertGlobingToRegex = (pattern) =>
  new RegExp(pattern.padEnd(1, "$").replace(".", "[.]").replace("*", ".*"));

let matchingPattern = (filename, filePattern) =>
  filename.match(convertGlobingToRegex(filePattern)) == null ? false : true;

let ensureDirectoryExistence = (path) => {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
};

export const copy = async (input, destination) => {
  input.forEach(async (signature) => {
    let pattern = getFilenamePattern(signature);
    let directory = getDirectory(signature);
    let globstar = endsWithGlobstar(directory);

    if (globstar) {
      let path = removeGlobstar(directory);
      let directories = await getSubDirectories(path);
      let paths = directories.map((directory) => `${directory}${pattern}`);
      await copy(paths, destination);
    } else {
      if (!existsSync(directory)) exit(1);
      const items = await readdir(directory, { withFileTypes: true });

      await items
        .filter((item) => item.isFile())
        .map((file) => file.name)
        .filter((file) => matchingPattern(file, pattern))
        .forEach(async (file) => {
          let destPath = `${destination}/${file}`;
          ensureDirectoryExistence(destination);
          await copyFile(`${directory}${file}`, destPath);
        });
    }
  });
};
