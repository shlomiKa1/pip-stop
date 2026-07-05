import { BASE_URL } from "../config.js";

export async function readAPI(url = BASE_URL) {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to loading URL", url);

    const data = await res.json();
    
    return data;
  } catch (err) {
    throw err;
  }
}

// console.log(readAPI().then((data) => (data)))