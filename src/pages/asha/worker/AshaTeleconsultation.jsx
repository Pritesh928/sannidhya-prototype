import PageHeader from "../../../components/PageHeader";

function AshaTeleconsultation({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Teleconsultation"
          subtitle="Connect a patient with a doctor"
          navigate={navigate}
        />

        <div className="card">

          <h3>Patient</h3>

          <p>
            Rahul Patil — Fever & weakness
          </p>

          <button
            className="primary-button"
            onClick={() => alert("Demo: Doctor connected")}
          >
            Connect to Doctor
          </button>

        </div>

      </div>
    </div>
  );
}

export default AshaTeleconsultation;