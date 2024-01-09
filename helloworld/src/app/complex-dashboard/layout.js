export default function DashboardLayout({ children, users, revenue, notifications, login }) {
  const isLoggedIn = true

  return isLoggedIn ? (
    <div>
      {/* app/complex-dashboard/@children/page.js */}
      <div>{children}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
}