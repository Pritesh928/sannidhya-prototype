import PageHeader from "../../../components/PageHeader";

function HousesVisited({ navigate }) {
  const houses = [
    ["House #104", "3 members", "Completed"],
    ["House #108", "5 members", "Completed"],
    ["House #115", "2 members", "Pending"],
  ];

  return (
    <div className="mobile-container">
      <div className="page">

        <PageHeader
          title="Houses Visited"
          subtitle="Today's field visits"
          navigate={navigate}
        />

        {houses.map((house, i) => (
          <div className="list-item" key={i}>
            <div className="list-main">
              <h3>{house[0]}</h3>
              <p>{house[1]}</p>
            </div>

            <span className="badge">
              {house[2]}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default HousesVisited;