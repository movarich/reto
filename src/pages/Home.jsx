import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";

const Home = () => {
	const [ search , setSearch ]= useState()
	const [countries, setCountries] = useState([1, 2, 3, 4, 5,6, 7,8, 9, 10, 11, 12, 13, 14])
	const [ activeContinent, setActiveContinent ] = useState(false)

	const handleContinent = () => {
		setActiveContinent(true)
	}

	const [ continent, setContinent ] = useState([])
	const selectContinent = (content) => {

		setContinent(state => [...state, content])
		console.log(continent)
	}

    return (
      	<div className="relative mx-auto w-full ">
			<div className="flex justify-center w-full drop-shadow-md mt-10 sm:mt-2 ">
				<div className="flex mt-5 bg-white rounded-full px-2 py-2 min-w-[60%]">
					<div className="flex w-full ml-3 flex-col">
						<label className="text-sm font-semibold hidden lg:block">País</label>
						<input onChange={(e) => setSearch(e.target.value)} onFocus={handleContinent} className="outline-none border-b-1 border-blue-500 text-sm text-blue-700 font-semibold" placeholder="Escribe el país que deseas ver"/>
					</div>
					<button className="bg-blue-500 rounded-full py-1 px-4 text-white items-center flex gap-1"><span className=" items-center"><FaSearch/></span> <span className="hidden lg:block">Buscar</span></button>	
				</div>
			</div>
			<div className="mt-6 flex justify-center px-12 bg-yellow-200">
				<div className="bg-blue-400 w-full mx-auto">
					<div className="flex justify-start flex-wrap w-auto gap-4 bg-orange-500">
					{
						countries.map((country, index) => (
							<Card key={index} country={country}/>
						))
					}
					</div>
				</div>
			</div>
			{ activeContinent &&(<div className=" absolute bg-white  rounded-3xl px-5 py-3 max-w-96 md:left-44 lg:left-52 top-28 sm:top-20 lg:top-24">
				<div className="flex justify-between mb-3">
					<p className="font-semibold">Filtrar por continentes</p>
					<button className="text-blue-600 font-semibold">Limpiar</button>
				</div>
				<div className="grid grid-cols-3 gap-2">
					{
						["África", "América", "Asia", "Europa", "Oceanía"].map((continent, index) => (
							<div key={index}>
								<button onClick={() => selectContinent(continent)}>
									<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0k-HH6Z6y27b5jiaqHjWeBI5HC9D5h4Rc_Q&s" className="rounded-md hover:border-2 hover:border-blue-500"/>
								</button>
								<p className="text-sm font-semibold text-left">{continent}</p>
							</div>
						))
					}
				</div>
			</div>)}
		</div>
    )
}

export default Home
