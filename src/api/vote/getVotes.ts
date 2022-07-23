import { getHeaders } from "../utils";

export async function getVotes() {
  const result = await fetch("https://api.thecatapi.com/v1/votes", {
    method: "GET",
    headers: getHeaders(),
  });

  return await result.json();
}
