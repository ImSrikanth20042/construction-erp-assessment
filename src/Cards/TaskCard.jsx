import { Circle } from "@mui/icons-material";

const TaskCard = ({ color, task, date }) => {
  return (
    <div className="bg-gray-100 flex p-5 items-center justify-evenly rounded shadow-sm">
      <Circle sx={{ color: color }} />
      <span className="font-medium text-base text-gray-950">{task}</span>
      <span className="text-gray-600 font-medium text-base">{date}</span>
    </div>
  );
};
export default TaskCard;
