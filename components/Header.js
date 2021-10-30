import Image from 'next/image'
const Header = () => {
    return (
        <div className="bg-gray-600 ">
            <div className="flex justify-between max-w-6xl bg-red-300 m-auto">

                {/* Left */}
                <div className="relative w-24 h-24 bg-red-600 hidden lg:inline-grid cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>

                <div className="relative w-10 h-10 bg-red-600 lg:hidden cursor-pointer flex-shrink-0">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit='contain'
                    />
                </div>



                {/* Middle  Search Input field*/}

                {/* Right */}
            </div>
        </div>
    )
}

export default Header
