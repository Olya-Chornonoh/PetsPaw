import { getHeaders } from "../utils";

export async function getBreeds(limit: number) {
  const result = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
    {
      method: "GET",
      headers: getHeaders(),
    }
  );

  return await result.json();
}
