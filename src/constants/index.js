import MemoryIcon from "@mui/icons-material/Memory";
import { blue, green, purple, red } from "@mui/material/colors";
import Groups2Icon from "@mui/icons-material/Groups2";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AddIcon from "@mui/icons-material/Add";
import { CheckCircleOutline } from "@mui/icons-material";
import WarningIcon from "@mui/icons-material/Warning";

export const dashboardCards = [
  {
    title: "Active Projects",
    value: "24",
    percentageChange: "+12%",
    changeColor: "green",
    icon: ApartmentIcon,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200",
  },
  {
    title: "Total Employees",
    value: "156",
    percentageChange: "+5%",
    changeColor: "green",
    icon: Groups2Icon,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
  },
  {
    title: "Pending Bills",
    value: "₹45.2L",
    percentageChange: "+18%",
    changeColor: "red",
    icon: ReceiptLongIcon,
    iconColor: red[500],
    iconBgColor: "bg-red-300",
  },
  {
    title: "Equipment Usage",
    value: "78%",
    percentageChange: "+8%",
    changeColor: "green",
    icon: MemoryIcon,
    iconColor: purple[500],
    iconBgColor: "bg-purple-300",
  },
];
export const projectTimeline = [
  { name: "Green Valley Complex", progress: "75%" },
  { name: "Metro Station", progress: "45%" },
  { name: "City Mall", progress: "90%" },
];
export const recentActivities = [
  {
    icon: AddIcon,
    color: "blue",
    bgColor: "bg-sky-200",
    text: "New material order placed",
    time: "2 hours ago",
  },
  {
    icon: CheckCircleOutline,
    color: "green",
    bgColor: "bg-green-100",
    text: "Site inspection completed",
    time: "5 hours ago",
  },
  {
    icon: WarningIcon,
    color: "yellow",
    bgColor: "bg-yellow-100",
    text: "Compliance warning issued",
    time: "1 day ago",
  },
];
// Upcoming Tasks Data
export const upcomingTasks = [
  { color: "yellow", task: "Site Meeting - Green Valley", date: "Tomorrow" },
  { color: "red", task: "Material Delivery - Metro Station", date: "23 Aug" },
  { color: "green", task: "Safety Inspection - City Mall", date: "25 Aug" },
];

// Resource Allocation Data
export const resourceAllocations = [
  { resource: "Labor", current: 85, total: 100 },
  { resource: "Equipment", current: 12, total: 15 },
  { resource: "Materials", current: 70, total: 100 },
];
export const projectData = [
  {
    projectName: "Green Valley Complex",
    description: "Residential Project",
    status: "In Progress",
    statusColor: "green-300",
    statusTextColor: "green-800",
    progress: 75,
    startDate: "01 Jun 2023",
    endDate: "31 Dec 2023",
    actions: ["Edit", "View"],
  },
  {
    projectName: "Green Valley Complex",
    description: "Residential Project",
    status: "On Hold",
    statusColor: "amber-300",
    statusTextColor: "amber-900",
    progress: 45,
    startDate: "15 May 2023",
    endDate: "30 Nov 2023",
    actions: ["Edit", "View"],
  },
];
export const employeeData = [
  {
    employee: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    status: "Active",
    project: "Green Valley Complex",
  },
  {
    employee: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Construction",
    status: "Active",
    project: "Metro Station",
  },
];
export const resourceCards = [
  {
    title: "Today's Attendance",
    data: [
      { label: "Present", value: 45, color: "text-green-700" },
      { label: "Absent", value: 5, color: "text-red-700" },
      { label: "On Leave", value: 3, color: "text-red-700" },
    ],
  },
  {
    title: "Labor Distribution",
    data: [
      { label: "Skilled", value: 65, color: "text-blue-700" },
      { label: "Semi-Skilled", value: 42, color: "text-blue-700" },
      { label: "Unskilled", value: 28, color: "text-blue-700" },
    ],
  },
  {
    title: "Upcoming Leaves",
    data: [
      {
        name: "John Smith",
        dates: "23 Aug - 25 Aug",
        status: "Approved",
        statusColor: "text-amber-800",
        bgColor: "bg-yellow-300",
      },
      {
        name: "Sarah Johnson",
        dates: "28 Aug - 30 Aug",
        status: "Approved",
        statusColor: "text-green-700",
        bgColor: "bg-green-200",
      },
    ],
  },
];
