import {
  ChartBarIcon,
  BuildingOffice2Icon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ClipboardDocumentListIcon,
  UserIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export const dashboardElements = [
  {
    eleIcon: <ChartBarIcon className="h-6 w-6 " />,
    eleText: "Dashboard",
  },
  {
    eleIcon: <BuildingOffice2Icon className="h-6 w-6 " />,
    eleText: "Academy Management",
  },
  {
    eleIcon: <BanknotesIcon className="h-6 w-6 " />,
    eleText: "Fee Payement",
  },
  {
    eleIcon: <ClipboardDocumentCheckIcon className="h-6 w-6 " />,
    eleText: "Attendance",
  },
  {
    eleIcon: <UserIcon className="h-6 w-6 " />,
    eleText: "Enquiries",
  },
  {
    eleIcon: <ClipboardDocumentListIcon className="h-6 w-6 " />,
    eleText: "Schedule",
  },
  {
    eleIcon: <CalendarDaysIcon className="h-6 w-6 " />,
    eleText: "Report & Analytics",
  },
];

export const dashBottomElements = [
  {
    eleIcon: <UserGroupIcon className="h-6 w-6 " />,
    eleText: "Students",
  },
  {
    eleIcon: <UserCircleIcon className="h-6 w-6 " />,
    eleText: "Coaches",
  },
];

export const schedule = [
  {
    date: "Fri, 01 Sep",
    time: "3:00 PM - 4:00 PM",
    name: "Beginners Badminton Class",
    attendees: "Jonas k and 125+ more",
    type:"class",
    id:1,
  },
  {
    date: "Fri, 01 Sep",
    time: "6:00 PM - 7:30 PM",
    name: "Intermediate Badminton Class",
    attendees: "JK Arun and 25+ more",
    type:"class",
    id:2,
    fit:"Fitness Test",
  },
  {
    date: "Fri, 01 Sep",
    time: "6:00 AM - 7:30 AM",
    name: "Staff Meeting",
    attendees: "John and 5+ more",
    type:"meeting",
    id:3
  },
  {
    date: "Sat, 02 Sep",
    time: "4:00 PM - 5:00 PM",
    name: "Yoga Competition @Academy",
    attendees: "Udit K and 125+ more",
    type:"event",
    id:4
  }
];
