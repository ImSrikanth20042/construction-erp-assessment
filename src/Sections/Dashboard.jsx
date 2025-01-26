import { Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  dashboardCards,
  projectTimeline,
  recentActivities,
  upcomingTasks,
  resourceAllocations,
} from "../constants";
import {
  ResourceCard,
  TaskCard,
  MultiCards,
  ProjectTimeline,
  RecentActivities,
} from "../Cards";

const Dashboard = () => {
  return (
    <section className="max-container max-sm:mt-8 bg-gray-50">
      <div className=" flex justify-between items-center px-0 py-0 bg-white mt-0 ">
        {/* Dashboard Title */}

        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5">
          Dashboard
        </h1>

        {/* Search and Notifications */}
        <div className="flex items-center space-x-4 mt-5 mb-5">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" />
          </div>

          {/* Notification Icon */}
          <NotificationsNoneIcon className="text-gray-500 cursor-pointer hover:text-gray-700" />
        </div>
      </div>
      <MultiCards cards={dashboardCards} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Timeline Section */}
        <div className="bg-white rounded shadow-lg p-4 w-full">
          <ProjectTimeline projectTimeline={projectTimeline} />
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white rounded shadow-lg p-4 w-full">
          <RecentActivities recentActivities={recentActivities} />
        </div>

        {/* Upcoming Tasks Section */}
        <div className="bg-white rounded shadow-lg p-4 w-full">
          <h3 className="font-medium text-2xl">Upcoming Tasks</h3>
          <div className="space-y-4 mt-4">
            {upcomingTasks.map((task, index) => (
              <TaskCard key={index} {...task} />
            ))}
          </div>
        </div>

        {/* Resource Allocation Section */}
        <div className="bg-white rounded shadow-lg p-4 w-full">
          <h3 className="font-medium text-2xl">Resource Allocation</h3>
          <div className="space-y-4 mt-4">
            {resourceAllocations.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
