import { getHeaders } from "../utils";

export async function createVote(id: string, value: number) {
  const body = JSON.stringify({
    image_id: id,
    value: value,
  });

  const result = await fetch("https://api.thecatapi.com/v1/votes", {
    method: "POST",
    headers: getHeaders(),
    body: body,
  });

  return await result.json();
}
