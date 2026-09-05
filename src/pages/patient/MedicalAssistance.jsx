import PageHeader from "../../components/PageHeader";

function MedicalAssistance({ navigate }) {
  return (
    <div className="mobile-container">

      <div className="page">

        <PageHeader
          title="Medical Assistance"
          subtitle="AI-assisted health guidance"
          navigate={navigate}
        />

        <div className="card">

          <h3>How can we help?</h3>

          <p>
            Describe your symptoms and Sannidhi will
            provide basic guidance and suggest the
            appropriate healthcare service.
          </p>

          <div className="input-group">
            <label>Your symptoms</label>

            <textarea
              placeholder="Example: Fever since yesterday..."
              rows="5"
              style={{
                width: "100%",
                border: "1px solid #d5e5de",
                borderRadius: "14px",
                padding: "13px",
              }}
            />
          </div>

          <button className="primary-button">
            Check Symptoms
          </button>

        </div>

      </div>

    </div>
  );
}

export default MedicalAssistance;