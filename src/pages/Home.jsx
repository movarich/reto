import {useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import {gql, useQuery} from '@apollo/client';
import { CONTINENTS } from '../constans/constans';
import { FaX } from "react-icons/fa6";
import { LazyLoadImage } from "react-lazy-load-image-component";

const LIST_ALL_COUNTRY = gql`
	query getCountryData($search: String!,  $continents: [String!]) {
		countries(filter: { name: { regex: $search }, continent: { in: $continents }  }) {
			code
			name
			currency
			continent {
				name
				code
			}
			languages {
				name
			}
			capital
			states {
				name	
			}
		}
	}
`;

const Home = () => {
	const [selectCountry, setSelectCountry] = useState({})
	const [selectCard, setSelectCard] = useState('')
	const [inputToSearch, setInputToSearch] = useState('')
	const [ search , setSearch ]= useState('')
	const [ continent, setContinent ] = useState([])
	// const [ isSearching, setIsSearching ] = useState(false)
	const [countries, setCountries] = useState([])
	const [ activeContinent, setActiveContinent ] = useState(false)
	const [url, setUrl] = useState('')


	const divRef = useRef(null);
 	const inputRef = useRef(null);

	const { refetch } = useQuery(LIST_ALL_COUNTRY, {
		variables: { 
			search: "^" + inputToSearch,
			continents: continent.length > 0 ? continent : CONTINENTS.map(item => item.value)
		},
		// skip: isSearching,
		onCompleted: (data) => {
			setCountries(data.countries)
			// setActiveContinent(false)
		}
	});

	const selectContinent = (content) => {
		if(!continent.includes(content)){
			setContinent([...continent, content])
		} else {
			const newArray = continent.filter(item => item !== content)
			setContinent(newArray)
		}
	}

	const handleInputChange = (e) => {
		// setIsSearching(true)
		setSearch(e.target.value)

		// setTimeout(() => {
		// 	setIsSearching(false)
		// }, 1500)
	}

	const callFetch = () => {
		setInputToSearch(search)
		refetch()
	}

	const handleClickCard = (country, url) => {
		if (selectCard == country.code) {
			setSelectCard('')
			setUrl('')
			return
		}
		setSelectCard(country.code)
		setSelectCountry(country)
		setUrl(url)
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (divRef.current && !divRef.current.contains(event.target) && inputRef.current && !inputRef.current.contains(event.target)) {
				setActiveContinent(false);
			}
		}
	
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

    return (
      	<div className="relative mx-auto w-full ">
			<div className="flex justify-center w-full drop-shadow-md mt-10 sm:mt-2 ">
				<div className="flex mt-5 bg-white rounded-full px-2 py-2 min-w-[60%]">
					<div className="flex w-full ml-3 flex-col">
						<label className="text-sm font-semibold hidden lg:block">País</label>
						<input onChange={handleInputChange} ref={inputRef}  onKeyDown={(e) => {
							if(e.key === 'Enter'){
								callFetch()
							}
						}} onFocus={() => setActiveContinent(true)} className="outline-none border-b-1 border-blue-500 text-sm text-blue-700 font-semibold" placeholder="Escribe el país que deseas ver"/>
					</div>
					<button onClick={callFetch} className="bg-blue-500 rounded-full py-1 px-4 text-white items-center flex gap-1 hover:bg-blue-600">
						<span className=" items-center"><FaSearch/></span>
						<span className="hidden lg:block">Buscar</span>
					</button>	
				</div>
			</div>
			<div className={`mt-6 mx-10 flex`}>
					<div className={`flex justify-center ${selectCard && 'md:justify-start'} flex-wrap gap-4 w-full`}>
						{
							countries.map((country, index) => (
								<Card key={index} country={country} handleClick={handleClickCard} cardState={selectCard}/>
							))
						}
					</div>
					{
						selectCard && (
							<div className={`md:top-0 md:right-0 bg-white py-4 px-6 leading-8 rounded-sm md:relative fixed bottom-0 right-0`}>
								<LazyLoadImage className="rounded-md mb-2 w-[200px] h-[100px]" src={url} />
								<button className="absolute right-2 top-2" onClick={() => setSelectCard('')}><FaX className="w-[10px]"/></button>
								<div className="flex items-center">
									<img src={`https://flagsapi.com/${selectCountry.code}/flat/48.png`} className="w-[40px] h-[30px]"/>
									<div className="flex flex-col ml-2 leading-6">
										<p className=" font-bold leading-none text-sky-500">{selectCountry.name}</p>
										<span className="font-semibold text-gray-400">{selectCountry.continent.name}</span>
									</div>
								</div>
								<p><span className="text-blue-600 font-bold mr-3">Capital:</span><span className="font-semibold">{selectCountry.capital}</span></p>
								<p><span className="text-blue-600 font-bold mr-3">Language:</span><span className="font-semibold">{selectCountry.languages[0]?.name}</span></p>
								<p><span className="text-blue-600 font-bold mr-3">Currency:</span><span className="font-semibold">{selectCountry.currency}</span></p>
								<p><span className="text-blue-600 font-bold mr-3">Region</span></p>
								<div className="drop-shadow-lg overflow-auto h-[90px]">
									{
										selectCountry.states.map((city, index) => (
											<p key={index} className="text-sm">{city.name}</p>
										))
									}
								</div>
							</div>
						)
					}
			</div>
			{ activeContinent &&(<div ref={divRef}
				onMouseEnter={() => setActiveContinent(true)}
				onMouseDown={() => setActiveContinent(true)}
				className="absolute bg-white  rounded-3xl px-5 py-3 max-w-96 md:left-44 lg:left-52 top-20 sm:top-20 lg:top-24">
					<div className="flex justify-between mb-3">
						<p className="font-semibold">Filtrar por continentes</p>
						<button onClick={() => { 
							setContinent([])
						}} className="text-blue-600 font-semibold">Limpiar</button>
					</div>
					<div className="grid grid-cols-3 gap-2">
						{
							CONTINENTS.map((cc, index) => (
								<div key={index}>
									<button onClick={() => selectContinent(cc.value)}>
										<img src={cc.url} className={`rounded-md h-[70px] w-[90px] ${continent.includes(cc.value) && 'border-blue-500 border-2'}`}/>
									</button>
									<p className="text-sm font-semibold text-left">{cc.label}</p>
								</div>
							))
						}
					</div>
				</div>
			)}
		</div>
    )
}

export default Home
