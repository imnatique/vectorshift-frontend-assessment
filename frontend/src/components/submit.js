import { useStore } from "../store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes,
          edges,
        }),
      });

      const result = await response.json();

      alert(
        `Pipeline Analysis

Nodes : ${result.num_nodes}
Edges : ${result.num_edges}
DAG : ${result.is_dag ? "Yes" : "No"}`,
      );
    } catch (err) {
      console.error(err);
      alert("Backend connection failed.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <button
        onClick={handleSubmit}
        style={{
          padding: "12px 12px",
          borderRadius: 8,
          border: "none",
          background: "#589058",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
          fontSize: 16,
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};
