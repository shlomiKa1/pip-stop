import { URL } from "../config.js";
import { readAPI } from "./fetchApi.service.js";
import fs from "fs";

export function loadJsonFile(filename) {
  return new Promise((res, rej) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return rej(`File '${filename}' not found`);
      res(JSON.parse(data));
    });
  });
}
