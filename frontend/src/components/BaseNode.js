import { Handle, Position } from "reactflow";

export const BaseNode = ({
  title,
  subtitle = "",
  headerColor = "#000",
  children,
  inputs = [],
  outputs = [],
  width = 250,
  minHeight = 120,
}) => {
  return (
    <div
      style={{
        width,
        minHeight,
        background: "#fff",
        borderRadius: 8,
        border: "1px solid #d1d5db",
        boxShadow: "0 3px 10px rgba(0,0,0,.08)",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: headerColor,
          color: "#fff",
          padding: "10px 14px",
          fontWeight: 600,
          fontSize: 15,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div
          style={{
            padding: "8px 14px 0",
            color: "#6b7280",
            fontSize: 12,
          }}
        >
          {subtitle}
        </div>
      )}

      {/* Body */}
      <div
        style={{
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {children}
      </div>

      {/* LEFT HANDLES */}
      {inputs.map((handle, index) => {
        const headerHeight = subtitle ? 70 : 50;
        const usableHeight = minHeight - headerHeight;
        const top =
          headerHeight + ((index + 1) * usableHeight) / (inputs.length + 1);

        return (
          <div key={handle.id}>
            <Handle
              type="target"
              position={Position.Left}
              id={handle.id}
              style={{
                top,
                left: -7,
                width: 10,
                height: 10,
                background: "#5858",
                border: "2px solid black",
              }}
            />

            {handle.label && (
              <span
                style={{
                  position: "absolute",
                  right: "100%",
                  marginRight: 8,
                  top: top + 4,
                  whiteSpace: "nowrap",
                  textAlign: "right",
                  fontSize: 11,
                  color: "#666",
                  fontWeight: 500,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {handle.label}
              </span>
            )}
          </div>
        );
      })}

      {/* RIGHT HANDLES */}
      {outputs.map((handle, index) => {
        const headerHeight = subtitle ? 70 : 50;
        const usableHeight = minHeight - headerHeight;
        const top =
          headerHeight + ((index + 1) * usableHeight) / (outputs.length + 1);

        return (
          <Handle
            key={handle.id}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={{
              top,
              right: -7,
              width: 10,
              height: 10,
              background: "#5858",
              border: "2px solid black",
            }}
          />
        );
      })}
    </div>
  );
};
