import { Outlet } from "react-router-dom"
import Sidebar from "./components/Sidebar"

function App() {

    return (
        <div className="flex bg-[#7cc6f857] relative">
            <Sidebar/>
            <div className="w-full md:w-[calc(100%-230px)] h-screen">
                <div className="overflow-y-auto w-full h-full">
                <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default App
