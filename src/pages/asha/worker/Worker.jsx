import PageHeader from "../../../components/PageHeader";
import { ashaWorkers } from "../../../data/asha";

function Workers({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="ASHA Workers"
          subtitle="Assigned workers"
          navigate={navigate}
        />

        {ashaWorkers.map((worker) => (
          <div className="list-item" key={worker.id}>
            <div className="list-main">
              <h3>{worker.name}</h3>
              <p>{worker.area}</p>
              <p>{worker.households} households</p>
            </div>

            <span className="badge">
              {worker.pending} pending
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Workers;