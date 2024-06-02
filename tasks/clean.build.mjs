#! /usr/bin/env node
import { del } from "./del.mjs";
await del(["./dist/**/*.js", "./dist/**/*.d.ts"]);
