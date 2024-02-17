import React from 'react';

const UpcomingScheduleTable = () => {
  const scheduleItems = [
    {
      day: 'O C',
      date: 'Fri, 01 Sep',
      time: '3:00 PM - 4:00 PM',
      type: 'Classes',
      title: 'Beginners Badminton Class',
    },
    {
      day: 'OC',
      date: 'Fri, 01 Sep',
      time: '6:00 PM - 7:30 PM',
      type: 'Classes',
      title: 'Intermediate Badminton Class',
    },
    {
      day: 'OM',
      date: 'Fri, 02 Sep',
      time: '6:00 AM - 7:30 AM',
      type: 'Meetings',
      title: 'Staff Meeting',
    },
    {
      day: 'OE',
      date: 'Sat, 02 Sep',
      time: '4:00 PM - 5:00 PM',
      type: 'Events',
      title: 'Yoga Competition @Academy',
    },
  ];

  const otherEvents = [
    { title: 'Fitness Test', trainer: 'Jonas K and 15+ more' },
    { title: 'JK Arun and 25+ more' },
    { title: 'John and 5+ more' },
    { title: 'Udit K and 125+ more' },
  ];

  return (
    <div className="bg-white shadow-md p-4 rounded-md mt-8">
      <h3 className="text-xl font-bold mb-4">Upcoming Schedule</h3>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="border px-4 py-2">Day</th>
            <th className="border px-4 py-2">Date</th>
            <th className="border px-4 py-2">Time</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Title</th>
            {/* <th className="border px-4 py-2">VIEW</th> */}
          </tr>
        </thead>
        <tbody>
          {scheduleItems.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.day}</td>
              <td className="border px-4 py-2">{item.date}</td>
              <td className="border px-4 py-2">{item.time}</td>
              <td className="border px-4 py-2">{item.type}</td>
              <td className="border px-4 py-2">{item.title}</td>
              <td key={index} className="truncate"><a href="#">view</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingScheduleTable;