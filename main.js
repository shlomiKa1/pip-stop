import {
  showBordPits,
  sendMessageToCar,
  searchByNumCar,
} from "./services/raceCrud.service.js";

async function runApp() {
  try {
    console.log("Pit Stop Queue - Race Team Management System");
    console.log(
      `Race engineer: "Let's check the current queue status on the pit wall.`,
    );

    console.log(`Loading queue data...\n`);
    let str;
    const all = await Promise.all([
      showBordPits(),
      sendMessageToCar,
      (str = "--- Search for a car by number ---"),
      searchByNumCar(44),
      searchByNumCar(99),
    ]);

    console.log(all);
  } catch (err) {
    console.log(err.message);
  } finally {
    console.log("Process completed successfully. The pit wall is up to date.");
  }
}
