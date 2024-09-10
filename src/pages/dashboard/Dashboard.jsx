import DashboardCards from '../../assets/components/DashboardCards';
import ActionTable from '../../assets/components/ActionTable';
import TyrePurchases from '../../assets/components/TyrePurchases';

function Dashboard() {
  return (
    <>
      <div className="w-full">
        <DashboardCards />
        <ActionTable />
        <TyrePurchases />
      </div>
    </>
  );
}

export default Dashboard;
