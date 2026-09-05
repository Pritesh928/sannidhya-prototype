function BottomNav({ navigate, active = "home", profilePage = "patient-profile" }) {
  return (
    <div className="bottom-nav">

      <button
        className={active === "home" ? "active" : ""}
        onClick={() => navigate("patient")}
      >
        🏠
        <br />
        Home
      </button>

      <button
        className={active === "appointments" ? "active" : ""}
        onClick={() => navigate("patient-appointments")}
      >
        📅
        <br />
        Visits
      </button>

      <button
        className={active === "records" ? "active" : ""}
        onClick={() => navigate("patient-records")}
      >
        📋
        <br />
        Records
      </button>

      <button
        className={active === "profile" ? "active" : ""}
        onClick={() => navigate(profilePage)}
      >
        👤
        <br />
        Profile
      </button>

    </div>
  );
}

export default BottomNav;