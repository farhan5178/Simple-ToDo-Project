import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
        <h1>My Project Navbar</h1>
      </header>

      <main style={{ padding: "2rem" }}>
        <Outlet />
      </main>

      <footer style={{ backgroundColor: "#333", color: "#fff", padding: "1rem" }}>
        <p>My Project Footer © 2025</p>
      </footer>
    </>
  );
}
