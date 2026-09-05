import PageHeader from "../../components/PageHeader";

function PatientProfile({ user, navigate, onLogout }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Profile"
          subtitle="Your account"
          navigate={navigate}
        />

        <div className="card">

          <div className="avatar">
            {user.name.charAt(0)}
          </div>

          <h2>{user.name}</h2>

          <p>
            Mobile: {user.phone}
          </p>

          <span className="badge">
            Patient
          </span>

        </div>

        <button
          className="secondary-button"
          onClick={onLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default PatientProfile;