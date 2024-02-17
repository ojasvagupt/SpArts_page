import React from 'react';

const Header = ({ isOpen, setIsOpen }) => {
  const currentDate = new Date();
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const day = daysOfWeek[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'short' });

  return (
    <header className="flex items-center justify-between h-24 bg-white ">
      <div className="flex items-center space-x-4">
        <div className="w-52 flex flex-col items-center">
          <div className="text-center">
          <div className="items-center">
          <img src={require('../SpArts.png')} alt="SpArts logo" className=" h-16 w-48 items-center" />
            <p className="text-gray-600 ">{day},  {date} {month}</p>
          </div>
          </div>
        </div>
        <div className="text-3xl font-semibold">Welcome Carolina,
          <div>
            <p className=" text-sm ml-2">Here is the summary of your Business</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mr-4 space-x-4">
        <img src={require('../settinglogo.png')} alt="Settings" className="h-6 w-6 mr-2" onClick={()=>{setIsOpen(!isOpen)}}/>
        <img src={require('../notificationlogo.png')} alt="Notification" className="h-6 w-6 mr-4" />

        <img src={require('../carolinaa.jpg')} alt="Carolina" className="h-12 w-10 ml-4 rounded-full" />
        <div className="">
          <div className="font-semibold text-3xl mt-0" >Carolina John</div>
          <div className="flex items-center mr-4 space-x-4 mt-2">
            <div className="absolute top-18 right-8">
              <div className="text-sm font-semibold">cj@example.com</div></div>
              </div>
        </div>
      </div>
    </header>
  );
};

export default Header;