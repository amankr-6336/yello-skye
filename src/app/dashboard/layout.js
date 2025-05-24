import Navbar from "@/component/navbar/Navbar";
import Spinner from "@/component/loading-indicator/Spinner";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ flex: 1, overflowY: "auto" }}>
        <Spinner />
        {children}
      </main>
    </div>
  );
}
