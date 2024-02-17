import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import UpcomingScheduleTable from './components/table';
import ActiveStats from './components/toppart';
import HighchartsReact from 'highcharts-react-official';
import MonthlyGrowth from './components/middlepart';
import MonthlyRevenue from './components/middlepart';
import UpcomingSchedule from './components/bottom';

const AppLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <div className="h-screen">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex w-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-col w-full ml-4 mr-4">
      <ActiveStats />
      <MonthlyRevenue />
      <UpcomingSchedule/>
      </div>

      </div>
      
        {/* Your main content here */}
      
    </div>
  );
};

export default AppLayout;