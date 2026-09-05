import PageHeader from "../../components/PageHeader";

function MedicalRecords({ navigate }) {
  const records = [
    ["General Consultation", "05 Sep 2026"],
    ["Blood Test", "04 Sep 2026"],
    ["Prescription", "02 Sep 2026"],
    ["Previous Visit", "18 Aug 2026"],
  ];

  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Medical Records"
          subtitle="Your longitudinal health history"
          navigate={navigate}
        />

        {records.map((record, index) => (
          <div className="list-item" key={index}>

            <div className="list-main">
              <h3>{record[0]}</h3>
              <p>{record[1]}</p>
            </div>

            <span className="badge">
              View
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MedicalRecords;