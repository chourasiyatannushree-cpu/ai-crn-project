function Chat() {
  return (
    <>
      <div style={header}>
        🤖 AI Assistant
        <div style={subText}>Log Interaction details here via chat</div>
      </div>

      {/* CHAT BODY */}
      <div style={chatBody}>
        <div style={aiMsg}>
          Log interaction details here (e.g., "Met Dr. Smith...")
        </div>
      </div>

      {/* INPUT */}
      <div style={inputBox}>
        <input style={input} placeholder="Describe Interaction..." />
        <button style={btn}>Log</button>
      </div>
    </>
  );
}

/* STYLES */
const header = {
  fontWeight: 600,
  marginBottom: "10px"
};

const subText = {
  fontSize: "12px",
  color: "#6b7280"
};

const chatBody = {
  flex: 1,
  overflowY: "auto",
  marginBottom: "10px"
};

const aiMsg = {
  background: "#e0f2fe",
  padding: "10px",
  borderRadius: "8px",
  fontSize: "13px"
};

const inputBox = {
  display: "flex",
  gap: "10px"
};

const input = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btn = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "10px 14px",
  borderRadius: "8px"
};

export default Chat;