import Link from "next/link";

export default function DashboardLayout({
  children,
  analytics,
  notifications,
  users,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
      <section style={{ padding: "20px", border: "1px solid #ccc" }}>
        {analytics}
      </section>
      <section style={{ padding: "20px", border: "1px solid #ccc" }}>
        {notifications}
      </section>
      <section style={{ padding: "20px", border: "1px solid #ccc" }}>
        {users}
      </section>
    </div>
  );
}
