import MenuIcon from "@mui/icons-material/Menu";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import InventoryIcon from "@mui/icons-material/Inventory";
import { Avatar } from "@mui/material";

const NavBar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-500 border-r shadow-sm flex flex-col">
        {/* Header */}
        <div className="p-5">
          <h1 className="font-bold text-2xl text-cyan-200">Construction ERP</h1>
        </div>
        <hr />

        {/* Menu Items */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          <div className="p-2 rounded-lg bg-gray-500 hover:bg-gray-400 cursor-pointer flex items-center">
            <a href="#dashboard" className="flex items-center">
              <MenuIcon className="mr-2 text-white" />
              <h2 className="font-semibold text-[18px] text-white">
                Dashboard
              </h2>
            </a>
          </div>
          <div className="p-2 rounded-lg bg-gray-500 hover:bg-gray-400 cursor-pointer flex items-center">
            <a href="#projects" className="flex items-center">
              <ApartmentIcon className="mr-2 text-white" />
              <h2 className="font-semibold text-[18px] text-white">Projects</h2>
            </a>
          </div>
          <div className="p-2 rounded-lg bg-gray-500 hover:bg-gray-400 cursor-pointer flex items-center">
            <a href="#resources" className="flex items-center">
              <PeopleAltOutlinedIcon className="mr-2 text-white" />
              <h2 className="font-semibold text-[18px] text-white">
                Resources
              </h2>
            </a>
          </div>
          <div className="p-2 rounded-lg bg-gray-500 hover:bg-gray-400 cursor-pointer flex items-center">
            <a href="#billing" className="flex items-center">
              <ReceiptLongIcon className="mr-2 text-white" />
              <h2 className="font-semibold text-[18px] text-white">Billing</h2>
            </a>
          </div>
          <div className="p-2 rounded-lg bg-gray-500 hover:bg-gray-400 cursor-pointer flex items-center">
            <a href="#inventory" className="flex items-center">
              <InventoryIcon className="mr-2 text-white" />
              <h2 className="font-semibold text-[18px] text-white">
                Inventory
              </h2>
            </a>
          </div>
        </div>

        <hr />

        {/* User Info */}
        <div className="p-4 flex items-center">
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            }
          />
          <div className="ml-4">
            <h4 className="text-white font-medium">Admin User</h4>
            <p className="text-sm text-gray-300">admin@erp.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
