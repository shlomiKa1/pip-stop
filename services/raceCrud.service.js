import { JSON_FILE } from "../config.js";
import { loadJsonFile } from "./file.service.js";

export async function carsWaiting() {
  try {
    const cars = await loadJsonFile(JSON_FILE);
    const waiting = cars.filter((car) => car["status"] === "waiting");

    return waiting;
  } catch (err) {
    throw err;
  }
}

export function getNextCar(cars) {
  return carsWaiting(cars)[0];
}

export async function showBordPits() {
  try {
    cars = await loadJsonFile(JSON_FILE);
    const nextCar = getNextCar(cars);

    let strTable = "\n========== PIT STOP QUEUE ==========\n";
    strTable += `\nRace: ${cars["raceName"]}`;
    strTable += `\nLap: ${cars["currentLap"]} / ${cars["totalLaps"]}`;
    strTable += `\nTotal cars in race: ${cars["cars"].length}`;
    strTable += `\nPit stops completed: ${cars["cars"].filter((car) => car["status"] === "done").length}`;
    strTable += `\nCars waiting for pit stop:`;
    strTable += `\n${carsWaiting(cars).forEach((car) => `- Car #${car["carNumber"]} | Driver: ${car["driverName"]}\n`)}`;
    strTable += `\nNext car to enter the pit:`;
    strTable += `\n>> Car #${nextCar["carNumber"]} | Driver: ${nextCar["driverName"]}`;
    strTable += `\n=====================================\n`;
  } catch (err) {
    throw err;
  }
  return strTable;
}

export async function searchByNumCar(num) {
  try {
    const cars = await loadJsonFile(JSON_FILE);
    const car = cars["cars"].find((car) => car["carNumber"] === num);

    if (!car)
      throw new Error(
        `Error: No car found with number #${99} in the current race.`,
      );
    return `Found car #${num} | Driver: ${car["driverName"]} | Status: ${car["status"]}`;
  } catch (err) {
    throw err;
  }
}

export function sendMessageToCar(car) {
  return `Radio message to car #${car["carNumber"]}: "Box box box, ${car["driverName"]}, pit this lap"`;
}
