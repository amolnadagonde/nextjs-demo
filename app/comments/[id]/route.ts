import { comments } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const comment = comments.find(
    (c: { id: number | string }) => c.id === parseInt(id),
  );
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;
  const payload = await request.json();
  const commentIndex = comments.findIndex(
    (c: { id: number | string }) => c.id === parseInt(id),
  );
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments[commentIndex].text = payload.text;
  return Response.json(comments[commentIndex]);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = await params;

  const updatedComments = comments.filter(
    (comment) => comment.id !== parseInt(id),
  );

  return new Response(JSON.stringify(updatedComments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
