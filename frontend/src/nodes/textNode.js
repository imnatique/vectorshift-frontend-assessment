import { useMemo, useState, useEffect } from "react";
import { useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const updateNodeInternals = useUpdateNodeInternals();

  // Find all variables like {{input}}
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

    const vars = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
      vars.push(match[1]);
    }

    // Remove duplicates
    return [...new Set(vars)];
  }, [text]);

  // Dynamic size
  const width = Math.max(240, Math.min(450, text.length * 8));
  const rows = Math.max(3, text.split("\n").length);
  const minHeight = Math.max(140, 140 + variables.length * 25);
  useEffect(() => {
    updateNodeInternals(id);
  }, [variables, id, updateNodeInternals]);
  return (
    <BaseNode
      title="Text"
      subtitle="Dynamic Text"
      headerColor="#ea580c"
      width={width}
      minHeight={minHeight}
      inputs={variables.map((variable) => ({
        id: `${id}-${variable}`,
        label: variable,
      }))}
      outputs={[
        {
          id: `${id}-output`,
        },
      ]}
    >
      <label>Text</label>

      <div>
        <textarea
          value={text}
          rows={rows}
          onChange={(e) => setText(e.target.value)}
          style={{
            width: "100%",
            resize: "none",
            height: `${Math.max(80, rows * 24)}px`,
            padding: 8,
            boxSizing: "border-box",
            borderRadius: 5,
            border: "1px solid #d1d5db",
          }}
        />
      </div>
    </BaseNode>
  );
};
