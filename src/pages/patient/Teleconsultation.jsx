import PageHeader from "../../components/PageHeader";
import { doctors } from "../../data/doctors";

function Teleconsultation({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Teleconsultation"
          subtitle="Connect with a doctor"
          navigate={navigate}
        />

        {doctors.map((doctor) => (
          <div className="list-item" key={doctor.id}>

            <div className="list-main">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialty}</p>
              <p>{doctor.facility}</p>
            </div>

            <button
              className="primary-button"
              style={{ width: "auto", margin: 0 }}
              onClick={() => alert("Demo consultation started")}
            >
              Consult
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Teleconsultation;