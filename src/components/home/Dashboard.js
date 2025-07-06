import AddActivity from "./AddActivityCard";
import EmissionOverview from "./EmissionOverview";
import ProgressCard from "./ProgressCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 px-6 gap-6">
      <AddActivity
        emissions={{
          electricity: 3.2,
          water: 2.1,
          transport: 5.4,
          food: 6.1,
        }}
      />
      <ProgressCard />
      <EmissionOverview />
    </div>
  );
};
export default Dashboard;
