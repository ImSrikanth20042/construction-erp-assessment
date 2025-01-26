const ProjectTimeline = ({ projectTimeline }) => {
  return (
    <div className="bg-white rounded shadow-lg p-4 w-full">
      <h3 className="font-medium text-2xl">Project Timeline</h3>
      {projectTimeline.map((project, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-black">
              {project.name}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {project.progress}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: project.progress }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectTimeline;
