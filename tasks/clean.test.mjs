#! /usr/bin/env node
import { del } from "./del.mjs";
await del(["./src/**/*.js", "./src/**/*.map"]);
await del(["./test/**/*.js", "./test/**/*.map"]);
