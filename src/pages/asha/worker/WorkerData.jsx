import PageHeader from "../../../components/PageHeader";
import { ashaUsers } from "../../../data/asha";

function WorkerData({ navigate }) {
  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Collected Data"
          subtitle="Information submitted by workers"
          navigate={navigate}
        />

        {ashaUsers.map((user) => (
          <div className="list-item" key={user.id}>

            <div className="list-main">
              <h3>{user.name}</h3>
              <p>Age: {user.age}</p>
              <p>{user.condition}</p>
            </div>

            <span className="badge">
              {user.followUp}
            </span>

          </div>
        ))}

      </div>
    </div>
  );
}

export default WorkerData;