import { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { GiBookshelf } from "react-icons/gi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { PiStudent, PiUser, PiBooks } from "react-icons/pi";

const Nav = () => {
  const { user } = useContext(UserContext);
  return (
    <nav
      id="nav"
      className="z-0 hidden h-full flex-col justify-stretch bg-slate-950 px-4 py-4 text-slate-100  dark:bg-slate-950 dark:from-65% lg:flex "
    >
      <ul className="m-auto flex flex-grow flex-col items-center justify-start gap-[6px]">
        <NavLink to={"./paper"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            <GiBookshelf className="pt-[0.1rem] text-2xl  " />
            Ders Notları
          </li>
        </NavLink>
        <NavLink to={"./time_schedule"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            <AiOutlineSchedule className="pt-[0.1rem] text-2xl  " />
            Takvim
          </li>
        </NavLink>
        {user.role === "HOD" && (
          <>
            <NavLink to={"./add_paper"} className="w-full font-medium">
              <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
                <BiBookAdd className="pt-[0.1rem] text-2xl  " />
                Döküman Ekle
              </li>
            </NavLink>
          </>
        )}
        {user.role === "student" && (
          <NavLink to={"./join_paper"} className="w-full font-medium">
            <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
              <PiBooks className="pt-[0.1rem] text-2xl  " />
              Döküman Yönetimi
            </li>
          </NavLink>
        )}
      </ul>
      <ul className="flex flex-grow flex-col items-start justify-end gap-[6px]">
        <NavLink to={"./profile"} className="w-full font-medium">
          <li className="flex gap-2 duration-200 rounded-md px-4 py-2 hover:bg-violet-600/40 ">
            {user.role === "student" ? (
              <PiStudent className="pt-[0.1rem] text-2xl" />
            ) : (
              <PiUser className="pt-[0.1rem] text-2xl" />
            )}
            {user.name}
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
