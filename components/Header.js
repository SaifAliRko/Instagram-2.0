import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
const Header = () => {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

                {/* Left */}
                <div className="relative w-24   hidden lg:inline-grid cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
                <div className="relative w-10 lg:hidden cursor-pointer flex-shrink-0">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>
                {/* Middle  Search Input field*/}
                <div className="relative mt-1 p-3  ">
                    <div className=" pl-3 absolute inset-y-0 flex items-center pointer-events-none">
                        <SearchIcon className=" h-5 w-5 text-gray-500 "/>
                    </div>
                    <input className="bg-gray-50 w-full 
                        border-gray-300 focus:ring-black 
                        pl-10  focus:border-black  rounded-md
                        sm:text-sm" 
                        type="text" placeholder="Search"/>
                </div>

                {/* Right */}
            </div>
        </div>
    )
}

export default Header
