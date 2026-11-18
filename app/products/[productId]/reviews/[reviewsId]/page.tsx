export default async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) {
  const { reviewsId, productId } = await params;
  return (
    <div>
      Review Id:{reviewsId} for Product:{productId}
    </div>
  );
}
