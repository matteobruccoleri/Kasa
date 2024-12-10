//import DataLogement from "../../../data/logements"
import "./Dropdown.scss"
import { useState } from "react";

const Dropdown =({title, src, text}) => {
    const [dropdown, setDropdown] = useState(false);

    function handleDropdown() {
        setDropdown(!dropdown)
    }


    return (
        <div className={"dropdown_item"}>
            <h3 className={"dropdown_title"} onClick={handleDropdown}>
                {title}
                <img className={`chevron ${dropdown ? 'rotate' : ''}`} src={src} alt="flêche" />
            </h3>
            <div className={`${"dropdown_text"} ${dropdown ? 'active' : ''}`}>
                <ul>
                    {Array.isArray(text) 
                        ? text.map((item, index) => (
                            <li key={index}>{item}</li>  // Crée un <li> pour chaque élément de text
                        ))
                        : <li>{text}</li>  // Si text n'est pas un tableau, on l'affiche en tant que seul <li>
                    }
                </ul>
            </div>
        </div>  
    )
}

export default Dropdown;