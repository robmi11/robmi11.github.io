import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="about">O mnie</Link>
      </nav>
      <main className="container mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
