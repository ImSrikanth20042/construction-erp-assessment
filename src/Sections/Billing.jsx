import {
  Add,
  DoneOutline,
  FileUpload,
  MonetizationOnOutlined,
  Receipt,
  TimerOutlined,
} from "@mui/icons-material";
import { blue, green, purple, yellow } from "@mui/material/colors";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const Billing = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      {" "}
      <div className="bg-white flex flex-row items-center p-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          RA Billing Management
        </h1>
        <div className="flex flex-row space-x-4 ml-auto">
          <div className="flex items-center p-2.5 bg-blue-500 rounded-sm">
            <div className="flex items-center space-x-2">
              <Add sx={{ color: "white" }} />
              <h3 className="font-medium text-base text-white">New Project</h3>
            </div>
          </div>
          <div className="flex items-center p-2.5 border border-gray-300 rounded-sm">
            <FileUpload sx={{ color: "grey" }} />
            <h3 className="font-medium text-base text-gray-500 ml-2">Export</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center flex-row bg-white mt-2 mb-2 p-5">
        <form className="max-w-sm mx-auto w-[10%]">
          <label
            htmlFor="project"
            className="block mb-2 text-sm font-medium text-gray-900">
            Project
          </label>
          <select
            id="project"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>All Projects</option>
            <option value="res">Green Valley Complex</option>
            <option value="com">Metro Station</option>
          </select>
        </form>
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
            <option value="prog">Approved</option>
            <option value="hold">Pending</option>
            <option value="done">Paid</option>
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
            placeholder="Search Bills..."
            className="bg-gray-50 border border-gray- text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          />
        </form>
      </div>
      <div className="flex-1 flex items-center justify-evenly ml-10 mt-5 mb-5  rounded">
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Total Billing
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2"> ₹2.4CR </p>
          </div>
          <Receipt
            sx={{ color: blue[500] }}
            className="bg-sky-200 rounded-full p-0.5"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Total Billing
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2"> ₹2.4CR </p>
          </div>
          <TimerOutlined
            sx={{ color: yellow[500] }}
            className="bg-sky-200 rounded-full p-0.5"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Approved Bills
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2"> ₹82.6L </p>
          </div>
          <DoneOutline
            sx={{ color: green[500] }}
            className="bg-sky-200 rounded-full p-0.5"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Total Paid</h3>
            <p className="text-4xl font-bold text-gray-900 mt-2"> ₹1.12CR </p>
          </div>
          <MonetizationOnOutlined
            sx={{ color: purple[500] }}
            className="bg-sky-200 rounded-full p-0.5"
          />
        </div>
      </div>
    </>
  );
};

export default Billing;
