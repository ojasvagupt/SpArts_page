import React from "react";

export default function SidebarListElement({eleIcon, eleText}) {
  return (
    <li className="px-4 py-2">
      <a href="#" className="flex items-center space-x-2">
        <span className="display flex">
          {eleIcon} {eleText}
        </span>
      </a>
    </li>
  );
}
