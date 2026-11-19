import Link from "next/link";

export default function NotificationsDashboard() {
  return (
    <div>
      <h1>Notifications Dashboard</h1>
      <div>
        <Link href="/dashboard/archived">Archived</Link>
      </div>
    </div>
  );
}
