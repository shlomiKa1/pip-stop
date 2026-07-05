import { JSON_FILE } from "../config.js";
import { readAPI } from "./fetchApi.service.js";
import fs from "fs";

export function loadJsonFile(filename) {
  return new Promise((res, rej) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return rej(`File '${filename}' not found`);
      try {
        res(JSON.parse(data));
      } catch (parseErr) {
        rej(parseErr);
      }
    });
  });
}

export function saveData(filenmae) {
  const data = readAPI().then((data) => data);

  return new Promise((res, rej) => {
    fs.writeFile(filenmae, JSON.stringify(data, null, 4), "utf-8", (err) => {
      if (err) rej(`Error to save to '${filenmae}'`);
      res("Data save successfully");
    });
  });
}

saveData(JSON_FILE);
