import PageHeader from "../../components/PageHeader";
import { medicines } from "../../data/pharmacy";

function Pharmacy({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Pharmacy"
          subtitle="Medicine availability"
          navigate={navigate}
        />

        {medicines.map((medicine) => (
          <div className="list-item" key={medicine.id}>

            <div className="list-main">
              <h3>{medicine.name}</h3>
              <p>
                Stock: {medicine.stock}
              </p>
            </div>

            <span
              className={
                medicine.status === "Unavailable"
                  ? "badge badge-danger"
                  : medicine.status === "Low Stock"
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

export default Pharmacy;