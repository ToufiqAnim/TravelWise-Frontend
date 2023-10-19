'use client';
import { ENUM_USER_ROLE } from '@/enums/common';
import Link from 'next/link';

export default function SideBarItems({ role }: { role: string }) {
  const defaultItems = (
    <li className="dashList">
      <Link href={`/${role}`} className="text-xl font-bold">
        Dashboard
      </Link>
    </li>
  );

  const userItems = (
    <>
      {defaultItems}
      <li className="dashList">
        <Link href={`/${role}/my_services`}>My Services</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/booking_history`}>Booking History</Link>
      </li>
    </>
  );

  const superAdminItems = (
    <>
      {defaultItems}
      <li className="dashList">
        <Link href={`/${role}/manage_admin`}>Manage Admin</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_service`}>Manage Service</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_category`}>Manage Category</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/booking_history`}>Booking History</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_booking`}>Manage Booking</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_content`}>Manage Content</Link>
      </li>
    </>
  );

  const adminItems = (
    <>
      {defaultItems}
      <li className="dashList">
        <Link href={`/${role}/manage_service`}>Manage Service</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_category`}>Manage Category</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/booking_history`}>Booking History</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_booking`}>Manage Booking</Link>
      </li>
      <li className="dashList">
        <Link href={`/${role}/manage_content`}>Manage Content</Link>
      </li>
    </>
  );

  if (role === ENUM_USER_ROLE.super_admin) return superAdminItems;

  if (role === ENUM_USER_ROLE.admin) return adminItems;

  return userItems;
}
