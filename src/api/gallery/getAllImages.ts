import { getHeaders } from "../utils";

export async function getAllImages(limit: number, order: string, type: string) {
  const result = await fetch(
    `https://api.thecatapi.com/v1/images/search?order=${order}&limit=${limit}&type=${type}`,
    {
      method: "GET",
      headers: getHeaders(),
    }
  );

  return await result.json();
}
