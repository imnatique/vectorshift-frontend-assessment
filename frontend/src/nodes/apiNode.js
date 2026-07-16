import { useState } from "react";
import { BaseNode } from "../components/BaseNode";

export const ApiNode = ({ id }) => {
  const [method, setMethod] = useState("GET");
  const [endpoint, setEndpoint] = useState("/users");

  return (
    <BaseNode
      title="API"
      subtitle="HTTP Request"
      headerColor="#00bfa6"
      inputs={[{ id: `${id}-trigger` }]}
      outputs={[{ id: `${id}-response` }]}
    >
      <label>
        Method
        <select
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            fontSize: 13,
            boxSizing: "border-box",
          }}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </label>

      <label>
        Endpoint
        <input
          style={{
            width: "100%",
            padding: "6px 8px",
            borderRadius: 5,
            border: "1px solid #d1d5db",
            fontSize: 13,
            boxSizing: "border-box",
          }}
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
