import { Add } from "@mui/icons-material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { projectData } from "../constants";
import { ProjectTable } from "../Tables";
const Projects = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <section className="max-container max-sm:mt-8 bg-white fit-content">
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
      <div className="flex justify-evenly items-center flex-row bg-white mb-1.5">
        <form className="max-w-sm mx-auto w-[10%]">
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
        <form className="max-w-sm mx-auto w-[10%]">
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
        <div className="max-w-sm mx-auto w-[10%]">
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
        <form className="max-w-sm mx-auto w-[10%]">
          <label
            htmlFor="search"
            className="block mb-2 text-sm font-medium text-gray-900 bg-white">
            Search
          </label>
          <input
            id="search"
            placeholder="Search projects..."
            className="bg-gray-50 border border-gray- text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </form>
      </div>
      <ProjectTable data={projectData} />
      <div className="bg-white pt-2 pb-2 flex mt-1.5 items-center justify-between">
        {/* Help text */}
        <span className="text-sm text-gray-700">
          Showing <span className="font-semibold text-gray-900">1</span> to{" "}
          <span className="font-semibold text-gray-900">10</span> of{" "}
          <span className="font-semibold text-gray-900">20</span> results
        </span>

        {/* Buttons */}
        <nav aria-label="Page navigation example">
          <ul className="flex items-center gap-2 text-sm">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Projects;
