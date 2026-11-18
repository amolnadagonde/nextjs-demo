export default async function Docs({ params }: { params: { slug: string[] } }) {
  const { slug } = await params;
  if (slug?.length) {
    return (
      <div>
        Documentation Page - {slug[0]} - {slug[1]}
      </div>
    );
  }
  return (
    <div>
      <div>Documentation Home Page</div>
    </div>
  );
}
