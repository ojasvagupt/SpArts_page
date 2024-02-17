import React, { useState } from "react";
import { schedule } from "../utils/utils";
import { EllipsisHorizontalIcon, FunnelIcon } from "@heroicons/react/24/solid";

const UpcomingSchedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCheckboxChange = (event) => {
    console.log(
      `Checkbox for ${event.target.name} checked: ${event.target.checked}`
    );
  };

  const [selected, setSelected] = React.useState("all");
  const [filteredItems, setFilteredItems] = useState(schedule);

  const handleSelect = (filter) => {
    setSelected(filter);
    filterSchedule(filter);
  };
  const filterSchedule = (filter) => {
    if (filter === "all") {
      setFilteredItems(schedule);
      return;
    }

    setFilteredItems(schedule.filter((item) => item.type === filter));
  };
  const GetType = ({ type }) => {
    const text = type.charAt(0).toUpperCase();
    let bgColorClass = "bg-cyan-950";
  
    if (text === "C") {
      bgColorClass = "bg-slate-400"; // Change color to red for type "c"
    }
    if (text === "M") {
        bgColorClass = "bg-slate-600"; // Change color to red for type "c"
      }
    if (text === "E") {
        bgColorClass = "bg-slate-700"; // Change color to red for type "c"
    }
    return (
        <div className={`text-white border rounded-lg ml-4 w-8 px-2 pr-2 text-center ${bgColorClass}`}>
            {text}
      </div>
    );
  };
  const handleButtonClick = (event) => {
    console.log(`Button for ${event.target.name} clicked:`);
  };

  return (
    <div className="bg-white shadow rounded p-2 border mt-2 ">
  <div className="flex items-center justify-between border-b w-full ml-0 mb-4 pb-2">
    <h2 className="text-xl">Upcoming Schedule</h2>
    <div className="flex">
      <FunnelIcon className="h-9 w-6 w-8 mr-6" />
      <div className="flex items-center space-x-2">
        <button
          name="all"
          onClick={() => handleSelect("all")}
          className={`border py-1 px-2 w-32 rounded-xl ${
            selected === "all"
              ? "bg-slate-700 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          All
        </button>
        <button
          name="class"
          onClick={() => handleSelect("class")}
          className={`border py-1 px-2 w-32 rounded-xl ${
            selected === "class"
              ? "bg-slate-700 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          Classes
        </button>
        <button
          name="meeting"
          onClick={() => handleSelect("meeting")}
          className={`border py-1 px-2 w-32 rounded-xl ${
            selected === "meeting"
              ? "bg-slate-700 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          Meetings
        </button>
        <button
          name="event"
          onClick={() => handleSelect("event")}
          className={`border py-1 px-2 w-32 rounded-xl ${
            selected === "event"
              ? "bg-slate-700 text-white"
              : "bg-slate-400 text-white"
          }`}
        >
          Events
        </button>
      </div>
    </div>

    <div className="dropdown">
      <button name="event" onClick={handleToggle}>
        <EllipsisHorizontalIcon className="h-18 w-16 strokeWidth-8" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleSelect("event")} className="border-2 p-1">Event</li>
          <li onClick={() => handleSelect("meeting")} className="border-2 p-1">Meeting</li>
          <li onClick={() => handleSelect("class")} className="border-2 p-1">Classes</li>
        </ul>
      )}
    </div>
  </div>
  <table className="w-full border-collapse table-auto">
    <tbody>
      {filteredItems.map((item) => (
        <tr key={item.id}>
          <td className="px-4 py-2  text-left flex">
            <input
              type="checkbox"
              name={`item${item.id}`}
              onChange={handleCheckboxChange}
            />
            <GetType type={item.type} />
          </td>
          <td className="px-4 py-2  text-center font-semibold">{item.date}</td>
          <td className="px-4 py-2  text-center font-semibold">{item.time}</td>
          <td className="px-4 py-2 mr-none text-center text-2xl font-semibold">{item.name}</td>
          <td className={`text-center text-red-500  ${item.fit ? "border border-dashed border-red-600 " : ""}`}>{item.fit}</td>
          <td className="px-4 py-2  text-center text-slate-500">{item.attendees}</td>
          
          <td className="px-4 py-2  text-left">
            <a href="#">
              <button
                name={`item${item.id}`}
                onClick={(e) => handleButtonClick(e, item)}
                className="text-sky-500"
              >
                View
              </button>
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default UpcomingSchedule;
