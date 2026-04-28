function Form() {
  return (
    <div>
      <h2 style={title}>Log HCP Interaction</h2>

      <Section title="Interaction Details">
        <Grid>
          <Field label="HCP Name">
            <input style={input} placeholder="Search or select HCP..." />
          </Field>

          <Field label="Interaction Type">
            <select style={input}>
              <option>Meeting</option>
              <option>Call</option>
            </select>
          </Field>

          <Field label="Date">
            <input type="date" style={input} />
          </Field>

          <Field label="Time">
            <input type="time" style={input} />
          </Field>
        </Grid>
      </Section>

      <Field label="Attendees">
        <input style={input} placeholder="Enter names or search..." />
      </Field>

      <Field label="Topics Discussed">
        <textarea style={{ ...input, height: "90px" }} />
      </Field>

      <div style={voiceNote}>
        🎤 Summarize from Voice Note (Requires Consent)
      </div>

      <Section title="Materials Shared / Samples Distributed">
        <div style={{ color: "#6b7280", fontSize: "13px" }}>
          No materials added.
        </div>

        <button style={secondaryBtn}>+ Search/Add</button>
      </Section>

      <button style={primaryBtn}>Save Interaction</button>
    </div>
  );
}

/* 🔹 COMPONENTS */
const Section = ({ title, children }) => (
  <div style={{ marginBottom: "20px" }}>
    <h4 style={sectionTitle}>{title}</h4>
    {children}
  </div>
);

const Grid = ({ children }) => (
  <div style={grid}>{children}</div>
);

const Field = ({ label, children }) => (
  <div style={{ marginBottom: "15px" }}>
    <label style={labelStyle}>{label}</label>
    {children}
  </div>
);

/* 🔹 STYLES */
const title = {
  fontSize: "20px",
  fontWeight: 600,
  marginBottom: "15px"
};

const sectionTitle = {
  fontSize: "14px",
  fontWeight: 600,
  marginBottom: "10px",
  color: "#374151"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "15px"
};

const labelStyle = {
  fontSize: "12px",
  color: "#6b7280"
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  marginTop: "4px"
};

const voiceNote = {
  fontSize: "12px",
  color: "#2563eb",
  marginBottom: "15px",
  cursor: "pointer"
};

const primaryBtn = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "#fff",
  border: "none",
  borderRadius: "8px",
  marginTop: "10px"
};

const secondaryBtn = {
  marginTop: "10px",
  padding: "8px 12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  background: "#fff"
};

export default Form;