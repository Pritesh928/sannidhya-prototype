import PageHeader from "../../components/PageHeader";

function Appointments({ navigate }) {
  const appointments = [
    {
      doctor: "Dr. Amit Sharma",
      type: "General Consultation",
      date: "05 Sep",
      time: "04:30 PM",
      status: "Confirmed",
    },
    {
      doctor: "Dr. Priya Joshi",
      type: "Specialist Consultation",
      date: "08 Sep",
      time: "11:00 AM",
      status: "Pending",
    },
  ];

  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Appointments"
          subtitle="Your upcoming visits"
          navigate={navigate}
        />

        {appointments.map((item, index) => (
          <div className="list-item" key={index}>

            <div className="list-main">
              <h3>{item.doctor}</h3>
              <p>{item.type}</p>
              <p>
                {item.date} • {item.time}
              </p>
            </div>

            <span className="badge">
              {item.status}
            </span>

          </div>
        ))}

        <button
          className="primary-button"
          onClick={() => alert("Demo: Appointment booking")}
        >
          + Book Appointment
        </button>

      </div>

    </div>
  );
}

export default Appointments;