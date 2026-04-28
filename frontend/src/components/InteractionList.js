import { useEffect, useState } from "react";
import axios from "axios";

function InteractionList() {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newNotes, setNewNotes] = useState("");

  const fetchData = async () => {
    const res = await axios.get("http://127.0.0.1:8000/interactions");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const update = async () => {
    await axios.put("http://127.0.0.1:8000/edit", {
      id: editId,
      notes: newNotes
    });

    alert("Updated!");
    setEditId(null);
    fetchData();
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>Interaction History</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Doctor</th>
            <th>Product</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item[0]}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>

              <td>
                {editId === item[0] ? (
                  <input
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                  />
                ) : (
                  item[3]
                )}
              </td>

              <td>
                {editId === item[0] ? (
                  <button onClick={update}>Save</button>
                ) : (
                  <button onClick={() => {
                    setEditId(item[0]);
                    setNewNotes(item[3]);
                  }}>
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InteractionList;