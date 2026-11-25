import { comments } from "./data";

export async function GET() {
  return new Response(JSON.stringify(comments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: payload.text,
  };
  const updatedComments = [...comments, newComment];

  return new Response(JSON.stringify(updatedComments), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
