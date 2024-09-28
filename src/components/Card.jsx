
const Card = ({country}) => {
  return (
    <div className="bg-white rounded-3xl drop-shadow-lg w-[210px]">
        <img src="https://exportou.com/wp-content/uploads/2018/12/MEXICO-1024x696.jpg" className="w-full h-[100px] rounded-tl-3xl rounded-tr-2xl"/>
        <div className="flex m-4 items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo0kf0kaHt3s_pwARMBWL8yChtBbt9JNXF5Q&s" className="w-[40px] h-[30px]"/>
            <div className="ml-2">
                <p className=" font-bold leading-none text-sky-500">United Kingdom</p>
                <span className="font-semibold text-gray-400">México</span>
            </div>
        </div>
    </div>
  )
}

export default Card
