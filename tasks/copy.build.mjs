#! /usr/bin/env node
import { copy } from "./copy.mjs";
await copy(["./src/**/*.css", "./src/**/*.html"], "./dist");
