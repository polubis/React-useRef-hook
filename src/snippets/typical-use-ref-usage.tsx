import { useLayoutEffect, useRef, useState } from "react";

export const Box = () => {
  const [metadata, setMetadata] = useState<string[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      // Truthy HTML node element access (not React one)
      const rect = ref.current.getBoundingClientRect();

      setMetadata([
        `Top: ${rect.top}`,
        `Right: ${rect.right}`,
        `Bottom: ${rect.bottom}`,
        `Left: ${rect.left}`
      ]);
    }
  }, []);

  return (
    <div ref={ref} style={{ width: "300px", height: "300px" }}>
      {metadata.map((node) => (
        <div key={node}>{node}</div>
      ))}
    </div>
  );
};
