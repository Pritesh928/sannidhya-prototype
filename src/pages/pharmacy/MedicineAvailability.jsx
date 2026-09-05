import PageHeader from "../../components/PageHeader";
import { medicines } from "../../data/pharmacy";

function MedicineAvailability({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Medicine Availability"
          subtitle="Check medicine before prescription"
          navigate={navigate}
        />

        {medicines.map((medicine) => (
          <div className="list-item" key={medicine.id}>

            <div className="list-main">
              <h3>{medicine.name}</h3>
            </div>

            <span
              className={
                medicine.stock === 0
                  ? "badge badge-danger"
                  : medicine.stock < 20
                  ? "badge badge-warning"
                  : "badge"
              }
            >
              {medicine.status}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MedicineAvailability;