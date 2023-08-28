import Dashboard from "../pages/dashboard/index";

export default function Layout({ children }) {
  return (
    <>
      <Dashboard />
      <main>{children}</main>
    </>
  );
}
