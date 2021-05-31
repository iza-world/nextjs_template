export default function Layout({ children }) {
  return (
    <div className="text-green-900" style={{ backgroundColor: '#EEF5F6' }}>
      {children}
    </div>
  );
}

export function DarkBackground({ children }) {
  return (
    <div style={{ backgroundColor: '#DCEDF0' }}>
      {children}
    </div>
  );
}
