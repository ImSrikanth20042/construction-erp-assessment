import { Add, FileUpload, Search } from "@mui/icons-material";
import { EmployeeTable } from "../Tables";
import { employeeData, resourceCards } from "../constants";
import { ResourceCards } from "../Cards";

const Resources = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-row bg-white">
        <div>
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
            <li className="me-2">
              <a
                href="#"
                aria-current="page"
                className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active">
                Employees
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                Labor Management
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                Attendance
              </a>
            </li>
            <li className="me-2">
              <a
                href="#"
                className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 ">
                Payroll
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between items-start mt-2.5 mb-2.5 bg-white p-1">
        <div className="flex flex-row space-x-4">
          <div className="flex items-center m-1.5 p-2.5 bg-blue-500 rounded-sm">
            <div className="relative flex justify-evenly">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white">New Project</h3>
            </div>
          </div>
          <div className="relative space-x-4 p-2.5 m-1.5 rounded-sm flex justify-evenly border border-gray-300">
            <FileUpload sx={{ color: "grey" }} />
            <h3 className="font-medium text-base text-gray-500">Export</h3>
          </div>
        </div>

        <div className="flex flex-row space-x-4 justify-end">
          <div className="justify-self-end p-1.5">
            <div className="relative ">
              <input
                type="text"
                placeholder="Search employees..."
                className="pl-4 pr-10 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-cyan-600"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <div className="justify-self-stretch p-1.5 bg-white">
            <form className="max-w-sm mx-auto w-full bg-white border-gray-100">
              <select
                id="filter"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue>Filter By Department</option>
                <option value="prog">Construction</option>
                <option value="hold">Engineering</option>
                <option value="done">Administration</option>
              </select>
            </form>
          </div>
        </div>
      </div>

      <EmployeeTable data={employeeData} />
      <ResourceCards cards={resourceCards} />
    </>
  );
};

export default Resources;
