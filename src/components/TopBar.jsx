function TopBar({ name = "Rahul Patil", onProfile }) {
  return (
    <div className="dashboard-top">
      <div className="greeting">
        <div className="avatar">
          {name.charAt(0)}
        </div>

        <div>
          <h2>Hello, {name.split(" ")[0]} 👋</h2>
          <p>Welcome to Sannidhi</p>
        </div>
      </div>

      <button className="notification-button">
        🔔
      </button>
    </div>
  );
}

export default TopBar;