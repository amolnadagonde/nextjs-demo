import Link from "next/link";

export default function DashboardLayout({
  children,
  analytics,
  notifications,
  users,
  login,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
  users: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false; // Replace with your actual authentication logic

  if (!isLoggedIn) {
    return <>{login}</>;
  }
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
