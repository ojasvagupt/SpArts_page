import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const options = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "bar",
    height: 30,
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["Estimated Revenue Potential "],
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    max: 40,
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderWidth: 0,
      pointWidth: 50,
      dataLabels: {
        enabled: false,
        format: '<span style="font-size: 14px; color: #fff;">10 L</span>',
        style: {
          textOutline: false,
        },
      },
    },
  },
  series: [
    {
      data: [50],
      color: "#1F2937",
    },
  ],
};

const opt = {
  credits: {
    enabled: false,
  },
  chart: {
    type: "bar",
    height: 30,
    spacing: [0, 0, 0, 0],
    margin: [0, 0, 0, 0],
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: [],
    labels: {
      enabled: false,
    },
  },
  yAxis: {
    labels: {
      enabled: false,
    },
    max: 40,
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    series: {
        stacking: 'normal',
        pointWidth: 50,
        dataLabels: {
            enabled: true
        }
    },
    bar: {
      borderWidth: 0,
      dataLabels: {
        enabled: false,
        format: '<span style="font-size: 14px; color: #fff;">10 L</span>',
        style: {
          textOutline: false,
        },
      },
    },
  },
  series: [
        {
            data: [75],
            color:'green'
        }, {
            data: [25],
            color:'grey'
        },
      ],
};
const ActiveStats = () => {
  const activeStudents = 5000;
  const activeCoaches = 5;
  const estimatedRevenue = "10 L";

  return (
    <div className="flex w-full">
      <div className="grid grid-cols-2 w-full">
        <table className="table-auto border-2 ">
          <thead>
            <tr>
              <td className="border-b px-4 py-2">Active Students</td>
              <td className="border-b px-4 py-2 text-right">Active Coaches</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b px-4 py-2 pl-8">{activeStudents}</td>
              <td className="border-b px-4 py-2 text-right pr-24">
                {activeCoaches}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="bg-white border-2 flex flex-col ml-2">
          <div className="flex justify-between border-b h-1/2 ">
            <div className="text-gray-600 text-base pl-2 pt-2 ">
              Estimated Revenue Potential for this month
            </div>
            <div className="text-3xl font-semibold mb-1 pr-6 ">
              {" "}
              &#x20B9;10 L
            </div>
          </div>
          <div className="flex">
            <div className="bg-white p-4 rounded-lg  w-1/2">
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className=" bg-white p-4 rounded-lg  w-1/2">
              <HighchartsReact highcharts={Highcharts} options={opt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveStats;
