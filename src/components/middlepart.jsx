import React from "react";
import { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { ChevronDownIcon, ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const options = {
  credits: false,
  title: {
    text: "Revenue",
    align: "left",
    style:{
        color:'#808080',
        fontSize:'18px',
        fontWeight:'light',
    },
  },

  xAxis: {
    categories: ["Jun 23", "Jul 23", "Aug 23"],
    lineWidth: 0,
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    title: {
      enabled: false,
    },
    gridLineWidth: 0,
  },
  legend: {
    symbolPadding: 5, // Adjust the padding around the custom symbol
    symbolRadius: 4, // Adjust the border radius of the custom symbol
    symbol: 'square' // Set the custom symbol to a square
},
  series: [
    {
      name: "Fee Received",
      color: "#1F2937",
      type: "column",
      data: [800, 1200, 1800],
    },
  ],
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:,.0f}</b> (<b>{point.percentage:.2f}%</b>)<br/>',
  },
};
const opt = {
    credits: false,
    title: {
        text: "Students",
        align: "left",
        style: {
            color: '#808080',
            fontSize: '18px',
            fontWeight: 'normal', 
        },
    },
    plotOptions: {
        column: {
          pointPlacement: 'between', 
        },
      },
    xAxis: {
        categories: ["Jun 23", "Jul 23", "Aug 23"],
        lineWidth: 0,
    },
    yAxis: {
        labels: {
            enabled: false,
        },
        title: {
            enabled: false,
        },
        gridLineWidth: 0,
    },
    legend: {
        symbolPadding: 5,
        symbolRadius: 4, 
        symbol: 'square'
    },
    series: [{
        name: 'Active Students',
        data: [71.5, 106.4, 129.2],
        type: 'column',
        color: "#1F2937",
    }, {
        name: 'Dropout Students',
        data: [-20, -10, -5],
        type: 'column',
        color: "grey", // Align bars with x-axis
    }],
};
const MonthlyRevenue = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="border w-full">
    <div className="flex-col flex-1 border">
         <div className="flex justify-between border mt-4 mb-4 p-4">
        <div className="text-xl ">Month-on-Month growth</div>
        <div className="flex">
        
        <button className="flex p-1 border shadow-sm" onClick={toggleDropdown}>
        Last 3 months
        <span className="w-4 h-4 ml-2">
        <ChevronDownIcon className="h-6 w-4 border-l " />
        </span>
        </button>
      {isDropdownOpen && (
        <div className="mt-2">
          <ul className="list-none p-0">
            <li>6 months</li>
            <li>1 year</li>
          </ul>
        </div>
      )}
      <ArrowDownCircleIcon className=" ml-8 h-8 w-6" />
      </div>
      </div>
        <div className="flex justify-evenly">
    <div className="bg-white p-4 rounded-lg shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    <div className="bg-white p-4 rounded-lg shadow-md">
    <HighchartsReact highcharts={Highcharts} options={opt} />
  </div>
  </div>
</div>
</div>
  );
};

export default MonthlyRevenue;
