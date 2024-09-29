import { useState } from "react";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = (props) => {
    const {country, handleClick, cardState} = props

    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchCountry = async () => {
            if (country) {
                const response = await fetch(`https://pixabay.com/api/?key=46257530-62eef579a82314bea2734d833&q=${country.capital || country.capital}&image_type=photo`)
                const data = await response.json()
                const dt = data.hits[0]?.webformatURL || data.hits[1]?.webformatURL
                setUrl(dt)
            }
        }
        fetchCountry()
    }, [])

    return (
        <div onClick={() => handleClick(country, url)} className={` rounded-3xl drop-shadow-lg w-[210px] ${cardState == country.code ? 'bg-sky-500': 'bg-white' }`}>
            <LazyLoadImage src={url} className="w-full h-[100px] rounded-tl-3xl rounded-tr-2xl"/>
            <div className="flex m-3 items-center">
                <LazyLoadImage src={`https://flagsapi.com/${country.code}/flat/48.png`} width={48} height={48} effect="blur"/>
                <div className="ml-1">
                    <p className={`font-bold leading-none ${ cardState == country.code ?'text-white':'text-sky-500' }`}>{country.name}</p>
                    <p className={`font-normal ${ cardState == country.code ?'text-white':'text-gray-400' }`}>{country.continent.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
