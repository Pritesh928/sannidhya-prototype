import PageHeader from "../../components/PageHeader";

function EquipmentAvailability({ navigate }) {
  const equipment = [
    ["CBC Analyzer", "Available"],
    ["Blood Glucose Analyzer", "Available"],
    ["X-Ray", "Maintenance"],
    ["ECG Machine", "Available"],
  ];

  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Equipment"
          subtitle="Equipment availability"
          navigate={navigate}
        />

        {equipment.map((item, index) => (
          <div className="list-item" key={index}>

            <div className="list-main">
              <h3>{item[0]}</h3>
            </div>

            <span
              className={
                item[1] === "Maintenance"
                  ? "badge badge-warning"
                  : "badge"
              }
            >
              {item[1]}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default EquipmentAvailability;