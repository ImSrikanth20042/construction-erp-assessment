import { Add } from "@mui/icons-material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const Projects = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section className="max-container max-sm:mt-8 bg-gray-50">
      <div className=" flex justify-between items-center px-0 py-0 bg-white mt-0 ">
        <h1 className="text-2xl font-semibold text-gray-800 mt-5 mb-5 ml-1.5">
          {/*Project Heading */}
          Project Management
        </h1>

        {/*Add project button */}
        <div className="flex items-center space-x-4 p-2.5 bg-blue-500 rounded-sm">
          <div className="relative flex justify-evenly">
            <Add sx={{ color: "white" }} />
            <h3 className="font-medium text-base text-white">New Project</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center flex-row">
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="Status"
            className="block mb-2 text-sm font-medium text-gray-900">
            Status
          </label>
          <select
            id="Status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All Status</option>
            <option value="prog">In Progress</option>
            <option value="hold">On Hold</option>
            <option value="done">Completed</option>
          </select>
        </form>
        <form className="max-w-sm mx-auto">
          <label
            htmlFor="projectType"
            className="block mb-2 text-sm font-medium text-gray-900">
            Project Type
          </label>
          <select
            id="projectType"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All Types</option>
            <option value="res">Residential</option>
            <option value="com">Commercial</option>
            <option value="infra">Infrastructure</option>
          </select>
        </form>
        <div className="max-w-sm mx-auto">
          <h2 className="block mb-2 text-sm font-medium text-gray-900">
            Date Range
          </h2>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            placeholderText="DD-MM-YYYY"
            className="border border-gray-300 rounded-md p-2 w-64"
          />
          {selectedDate && (
            <p className="mt-4">
              Selected Date:{" "}
              <strong>{format(selectedDate, "dd-MM-yyyy")}</strong>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
