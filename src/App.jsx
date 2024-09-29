import { MdMenu } from "react-icons/md";
import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

function App() {

    return (
        <div className="flex bg-[#7cc6f857] relative">
            {/* <MdMenu className=" text-gray-600 absolute top-5 left-5 lg:hidden size-9"/> */}
            <MdMenu className=" text-gray-600 absolute top-5 left-5 sm:hidden size-9"/>
            <Sidebar/>
            <div className="w-[calc(100%-230px)] h-screen">
                <div className="overflow-y-auto w-full h-full">
                <Outlet/>
                </div>
            </div>
            {/* <div className="absolute bottom-0 right-0 bg-white py-4 px-6 leading-8">
                <img className="rounded-md mb-2 w-[200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0kf0kaHt3s_pwARMBWL8yChtBbt9JNXF5Q&s" />
                <button className="absolute right-2 top-0">x</button>
                <div className="flex items-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0kf0kaHt3s_pwARMBWL8yChtBbt9JNXF5Q&s" className="w-[40px] h-[30px]"/>
                    <div className="flex flex-col ml-2 leading-6">
                        <p className=" font-bold leading-none text-sky-500">Ciudad México</p>
                        <span className="font-semibold text-gray-400">México</span>
                    </div>
                </div>
                <p><span className="text-blue-600 font-bold mr-3">Capital:</span><span className="font-semibold">London</span></p>
                <p><span className="text-blue-600 font-bold mr-3">Language:</span><span className="font-semibold">English</span></p>
                <p><span className="text-blue-600 font-bold mr-3">Population:</span><span className="font-semibold">500k people</span></p>
                <p><span className="text-blue-600 font-bold mr-3">Currency:</span><span className="font-semibold">Euro, Dollar</span></p>
                <p><span className="text-blue-600 font-bold mr-3">Region</span></p>

                <div className="drop-shadow-lg overflow-y-auto">
                    {
                        ["Santa Cruz", "Cordoba", "Jujuy", "Tucumán"].map((city, index) => (
                            <p key={index} className="text-sm">{city}</p>
                        ))
                    }
                </div>
            </div> */}
        </div>
    )
}

export default App
