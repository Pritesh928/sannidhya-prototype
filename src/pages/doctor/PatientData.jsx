import PageHeader from "../../components/PageHeader";

function PatientData({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Patient Data"
          subtitle="Complete medical information"
          navigate={navigate}
        />

        <div className="card">

          <h2>Rahul Patil</h2>

          <p>Age: 28</p>
          <p>Village: Nandgaon</p>
          <p>Condition: Fever & weakness</p>

          <hr />

          <h3>Medical History</h3>

          <p>
            Previous consultation for fever.
            Follow-up recommended.
          </p>

          <button
            className="primary-button"
            onClick={() => alert("Demo prescription created")}
          >
            Create Prescription
          </button>

        </div>

      </div>

    </div>
  );
}

export default PatientData;