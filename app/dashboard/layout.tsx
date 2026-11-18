export default function DashboardLayout({
  children,
  analytics,
  users,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <section>{analytics}</section>
      <section>{users}</section>
    </div>
  );
}
