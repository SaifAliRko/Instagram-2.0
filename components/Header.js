import Image from "next/image";
import {
  SearchIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
const Header = () => {
  const { data: session, status } = useSession();
  console.log(`session`, session);
  const router = useRouter();
  return (
    <div className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div
          onClick={()=>router.push("/")}
          className="
          relative w-24   hidden lg:inline-grid cursor-pointer"
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={()=>router.push("/")} 
          className="relative w-10 lg:hidden cursor-pointer flex-shrink-0">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle  Search Input field*/}
        <div className="max-w-xs ">
          <div className="relative mt-1 p-3  ">
            <div className=" pl-3 absolute inset-y-0 flex items-center pointer-events-none">
              <SearchIcon className=" h-5 w-5 text-gray-500 " />
            </div>
            <input
              className="bg-gray-50 w-full 
                            border-gray-300 focus:ring-black 
                            pl-10  focus:border-black  rounded-md
                            sm:text-sm block"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-end  space-x-4">
          <HomeIcon onClick={()=>router.push('/')} className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />

          {session ? (
            <>
              <div className="relative navBtn">

                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div
                  className="absolute -top-1 -right-2 animate-pulse bg-red-500 rounded-full h-5 w-5 flex
                            items-center text-xs justify-center text-white"
                >
                  3
                </div>
              </div>
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                className="h-10 w-10 rounded-full cursor-pointer object-cover"
                src={session.user.image}
                alt="Avtar"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
