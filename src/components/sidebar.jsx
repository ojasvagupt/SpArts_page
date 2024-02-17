import React from 'react';
import SidebarListElement from './sidebarListElement';
import { dashBottomElements, dashboardElements } from '../utils/utils';
import SearchBox from './searchBox';

const Sidebar = ({ isOpen }) => {
  return (
    <nav className={`${isOpen ? 'block' : 'hidden'} flex-none w-52 bg-gray-800 text-white h-100%`}>
      <ul className="mt-4 text-sm">
      <li className="mt-4 px-4 py-2">
          <span className="font-bold text-sm">Main Menu</span>
        </li>
        {dashboardElements.map(({eleIcon,eleText})=>(
          <SidebarListElement eleIcon={eleIcon} eleText={eleText}/>
        ))}
        <li className="mt-4 px-4 py-2">
          <span className="font-bold">more</span>
        </li>
          <SearchBox />
        {dashBottomElements.map(({eleIcon,eleText})=>(
          <SidebarListElement eleIcon={eleIcon} eleText={eleText}/>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;