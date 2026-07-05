export async function readAPI(url) {
  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to loading URL", url);

    return res.json();
  } catch (err) {
    throw err;
  }
}
