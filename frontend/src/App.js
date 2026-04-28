import Form from "./components/Form";
import Chat from "./components/Chat";

function App() {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        
        {/* LEFT */}
        <div style={styles.left}>
          <Form />
        </div>

        {/* RIGHT */}
        <div style={styles.right}>
          <Chat />
        </div>

      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#f4f6f9",
    height: "100vh",
    padding: "20px",
    fontFamily: "Inter, sans-serif"
  },

  wrapper: {
    display: "grid",
    gridTemplateColumns: "2.2fr 1fr",
    gap: "20px",
    height: "100%"
  },

  left: {
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    overflowY: "auto",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
  },

  right: {
    background: "#fff",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)"
  }
};

export default App;