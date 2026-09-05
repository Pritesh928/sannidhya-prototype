import PageHeader from "../../components/PageHeader";
import { medicines } from "../../data/pharmacy";

function Inventory({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Inventory"
          subtitle="Current medicine stock"
          navigate={navigate}
        />

        {medicines.map((medicine) => (
          <div className="list-item" key={medicine.id}>

            <div className="list-main">
              <h3>{medicine.name}</h3>
              <p>Quantity: {medicine.stock}</p>
            </div>

            <span className="badge">
              {medicine.status}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Inventory;