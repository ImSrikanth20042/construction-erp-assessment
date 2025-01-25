import { CheckCircleOutline, Circle, Search } from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AddIcon from "@mui/icons-material/Add";
import Groups2Icon from "@mui/icons-material/Groups2";
import WarningIcon from "@mui/icons-material/Warning";
import MemoryIcon from "@mui/icons-material/Memory";
import { blue, green, purple, red, yellow } from "@mui/material/colors";
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
      <div className="flex-1 flex items-center justify-evenly ml-10 mt-20  rounded">
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Active Projects
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">24</p>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              <span className="font-bold text-green-500">+12%</span> from last
              month
            </p>
          </div>
          <ApartmentIcon
            sx={{ color: blue[500] }}
            className="bg-sky-200 rounded-full p-0.5"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Total Employees
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">156</p>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              <span className="font-bold text-green-500">+5%</span> from last
              month
            </p>
          </div>
          <Groups2Icon
            sx={{ color: green[500] }}
            className="bg-green-200 p-0.5 rounded-2xl"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Pending Bills
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">₹45.2L</p>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              <span className="font-bold text-red-500">+18%</span> from last
              month
            </p>
          </div>
          <ReceiptLongIcon
            sx={{ color: red[500] }}
            className="rounded-2xl p-0.5 bg-red-300"
          />
        </div>
        <div className="p-4 bg-white rounded-2xl shadow-lg flex items-center justify-between w-64">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Equipment Usage
            </h3>
            <p className="text-4xl font-bold text-gray-900 mt-2">78%</p>
            <p className="text-sm text-gray-600 mt-1 font-medium">
              <span className="font-bold text-green-500">+8%</span> from last
              month
            </p>
          </div>
          <MemoryIcon
            sx={{ color: purple[500] }}
            className="bg-purple-300 p-0.5 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex-col grid-cols-2 justify-evenly">
        <div className=" flex items-center justify-evenly ml-10 mt-20">
          <div className="p-4 bg-white rounded shadow-lg flex items-center justify-between w-108">
            <div>
              <h3 className="font-medium text-2xl">Project Timeline</h3>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black">
                  Green Valley Complex
                </span>
                <span className="text-sm font-medium text-gray-500">75%</span>
              </div>
              <div className="w-100 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black">
                  Metro Station
                </span>
                <span className="text-sm font-medium text-gray-500">45%</span>
              </div>
              <div className="w-100 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-black">
                  City Mall
                </span>
                <span className="text-sm font-medium text-gray-500">90%</span>
              </div>
              <div className="w-100 bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                <div className="bg-blue-600 h-2.5 rounded-full w-[90%]"></div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-white rounded shadow-lg  w-108 ">
            <div>
              <h3 className="font-medium text-2xl mb-2.5 mt-1.5">
                Recent Activities
              </h3>
              <div className="flex items-center justify-between mb-1">
                <div className="flex-wrap justify-between">
                  <AddIcon
                    sx={{ color: blue[500] }}
                    className="bg-sky-200 mr-5 rounded-full"
                  />
                  <span className="font-medium text-base text-black">
                    New material order placed
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 p-0.5 ">2 hours ago</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex-wrap justify-between">
                  <CheckCircleOutline
                    sx={{ color: green[500] }}
                    className="bg-green-100 p-0 mr-5 rounded-full"
                  />
                  <span className="font-medium text-base text-black">
                    Site inspection completed
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 p-0.5">5 hours ago</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex-wrap justify-between">
                  <WarningIcon
                    sx={{ color: yellow[800] }}
                    className="bg-yellow-100 mr-5 rounded-full"
                  />
                  <span className="font-medium text-base text-black">
                    Compliance warning issued
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 p-0.5">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center p-2.5">
          <div className="p-5 bg-white rounded shadow-lg  w-108 ">
            <h3 className="font-medium text-2xl">Upcoming Tasks</h3>
            <div className="bg-gray-100 flex p-5 items-center justify-evenly">
              <Circle sx={{ color: yellow[700] }} />
              <span className="font-medium text-base text-gray-950">
                Site Meeting - Green Valley
              </span>
              <span className="text-gray-600 font-medium text-base">
                Tomorrow
              </span>
            </div>
            <div className="bg-gray-100 flex p-5 items-center justify-evenly">
              <Circle sx={{ color: red[700] }} />
              <span className="font-medium text-base text-gray-950">
                Material Delivery - Metro Station
              </span>
              <span className="text-gray-600 font-medium text-base">
                23 Aug
              </span>
            </div>
            <div className="bg-gray-100 flex p-5 items-center justify-evenly">
              <Circle sx={{ color: green[700] }} />
              <span className="font-medium text-base text-gray-950">
                Safety Inspection - City Mall
              </span>
              <span className="text-gray-600 font-medium text-base">
                25 Aug
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center ml-10 mt-20">
            <div className="p-6 bg-white rounded shadow-lg flex flex-col gap-4 w-[400px]">
              <h3 className="font-medium text-2xl">Resource Allocation</h3>

              {/* Labor */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-black">
                    Labor
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    85/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}></div>
                </div>
              </div>

              {/* Another Labor */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-black">
                    Labor
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    12/15
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "80%" }}></div>
                </div>
              </div>

              {/* Materials */}
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-black">
                    Materials
                  </span>
                  <span className="text-sm font-medium text-gray-500">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
