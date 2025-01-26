const RecentActivities = ({ recentActivities }) => {
  return (
    <div className="bg-white rounded shadow-lg p-4 w-full">
      <h3 className="font-medium text-2xl">Recent Activities</h3>
      {recentActivities.map((activity, index) => (
        <div key={index} className="flex items-center justify-between mb-1">
          <div className="flex-wrap justify-between">
            <activity.icon
              sx={{ color: activity.color }}
              className={`${activity.bgColor} mr-5 rounded-full`}
            />
            <span className="font-medium text-base text-black">
              {activity.text}
            </span>
          </div>
          <span className="text-gray-500 p-0.5">{activity.time}</span>
        </div>
      ))}
    </div>
  );
};

export default RecentActivities;
