import Navbar from '@/component/navbar/Navbar';
import LoadingSpinner from '@/component/loading-indicator/RouteLoader';

export const metadata = {
  title: 'Dashboard',
};

export default function DashboardLayout({ children }) {
 

  return (
    <div >
      <Navbar/>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        <LoadingSpinner/>
        {children}
      </main>
    </div>
  );
}
