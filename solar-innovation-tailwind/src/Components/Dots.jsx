export default function Dots({ className = "" }) {
  const rows = Array.from({ length: 6 });
  const cols = Array.from({ length: 6 });

  return (
    <div className={className}>
      <div className="flex flex-col gap-2">
        {rows.map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-2">
            {cols.map((_, colIndex) => (
              <div key={colIndex} className="dot"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
