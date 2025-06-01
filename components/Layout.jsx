// components/Layout.js
export default function Layout({ children }) {
  return (
    <div style={{ padding: '2rem', margin: '0 auto', maxWidth: '1200px' }}>
      {children}
    </div>
  );
}
