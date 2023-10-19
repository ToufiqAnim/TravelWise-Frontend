import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";

type ICategoryCard = {
  title: string;
  //   icon: ReactNode;
};

export default function CategoryCard({ title }: ICategoryCard) {
  return (
    <div className="flex flex-col items-center gap-2 bg-orange-300 rounded-md p-6 hover:-translate-y-2 transition-transform">
      {/* <div className="text-3xl">{icon}</div> */}
      <p className="font-bold">{title}</p>
    </div>
  );
}
