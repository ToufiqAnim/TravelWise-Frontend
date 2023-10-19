'use client';
import { ENUM_USER_ROLE } from '@/enums/common';
import { getUserInfo } from '@/services/auth.services';
import SideBarItems from '@/utils/SideBarItems';
import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export default function layout({ children }: ILayoutProps) {
  const userInfo = getUserInfo();
  //@ts-ignore
  const role = userInfo?.role;

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-8">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" p-4 w-56 min-h-full  border-r-2 bg-[#0f172a] text-white ">
          <SideBarItems role={role} />
        </ul>
      </div>
    </div>
  );
}
