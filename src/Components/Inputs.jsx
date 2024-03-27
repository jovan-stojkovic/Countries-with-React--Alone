import { useState } from "react";

const Inputs = () => {

    const regions = ["Africa", "America", "Asia", "Europe", "Oceania"]
    const [showRegionDiv, setShowRegionDiv] = useState('')

    const handleRegionClick = () => {
        setShowRegionDiv(showRegionDiv === '' ? 'show' : '')
    }

    const handleRegionBlur = () => {
        setShowRegionDiv('')
    }


    return ( <div className="inputs">
        <input type="text" placeholder="Search for a country..." className="search"/>
         <button className={`filter ${showRegionDiv}`} onClick={handleRegionClick} onBlur={handleRegionBlur}>Filter by Region</button>

         <div className={`regions ${showRegionDiv}`}>
            {regions.map(reg => {
                return (<ul  key={reg}>
                    <li>{reg}</li>
                </ul>);
            })}
         </div>
    </div> );
}
 
export default Inputs;