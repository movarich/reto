import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    const [active, setActive]= useState(0)
    const navigate = useNavigate()

    const menu = [
        { name: 'Home', path: '/home' },
        { name: 'Vista 1', path: '/vista1' },
        { name: 'Vista 2', path: '/vista2' },
    ]

    const handleMenu = (index) => {
        navigate(`${menu[index].path}`)
        setActive(index)
    }

    useEffect(()=>{
        navigate(`/home`)        
        // eslint-disable-next-line
    },[])

    return (
        <div className={`bg-[#525353] w-[230px] min-h-screen sm:block pt-6 hidden`}>
            <div className="bg-[#cac7c7] mx-8 rounded-lg flex justify-center">
                <img src="https://cnnespanol.cnn.com/wp-content/uploads/2016/08/destinos-logo-trans.png?resize=1024,576" className="w-40" />
            </div>    
            <div className=" flex flex-col gap-3 mx-8 mt-4">
                {
                    menu.map((item, index) => (
                        <button key={index} onClick={() => handleMenu(index)} className={`w-full font-bold rounded-lg text-left pl-5 py-1 ${active == index && 'bg-white'} ${active != index && 'text-white'} hover:bg-[#cac7c7] hover:text-black`}>{item.name}</button>    
                    ))
                }
            </div>    
        </div>
    )
}

export default Sidebar
