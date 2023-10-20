'use client';
import { getUserInfo, removeUserInfo } from '@/services/auth.services';
import Image from 'next/image';
import Link from 'next/link';
import img from '../components/reuseable/images/TravelWise.png';
import { Playfair_Display } from 'next/font/google';
import { FaCartPlus, FaUser, FaUserAlt, FaUserCircle } from 'react-icons/fa';
import { useGetCartsQuery } from '@/redux/api/cartApi';
import CartItems from '@/components/ui/CartItems';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
});
export default function Navbar() {
  const userInfo = getUserInfo();
  //@ts-ignore
  const role = userInfo?.role;
  //@ts-ignore
  const userId = userInfo?._id;

  const { data } = useGetCartsQuery({ user: userId });
  const handleLogOut = () => {
    removeUserInfo('accessToken');
    window.location.reload();
  };
  const totalCartItems = userInfo ? data?.data?.length : 0;
  return (
    <div className="navbar bg-[#090c0f]  text-white p-6 px-24">
      <div className="flex-1">
        <Link
          href="/"
          className={` normal-case text-2xl font-bold  border-0 ${playfair.className}`}
        >
          TravelWise
        </Link>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaCartPlus size={32} />
              <span className="badge badge-sm indicator-item">
                {totalCartItems}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-96 bg-base-100 shadow text-black"
          >
            <div className="card-body">
              <CartItems items={data?.data} />
            </div>
          </div>
        </div>

        {userInfo ? (
          <div className="dropdown dropdown-end text-black">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full text-white">
                <FaUserCircle size={32} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link
                  href="/profile"
                  className="hover:font-bold transition-all ease-in-out border-0"
                >
                  Profile
                </Link>
              </li>
              <Link
                href={`/${role}`}
                className="py-3  hover:font-bold transition-all ease-in-out  "
              >
                <li>
                  <a>Dashboard</a>
                </li>
              </Link>
              <button onClick={handleLogOut} className="btn btn-sm btn-error">
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <Link href="/signin">
            <button className="text-white hover:bg-[#111827] rounded transition-all ease-in-out  px-3 py-2">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
