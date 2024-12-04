import DataLogement from "../../../data/logements"
import styles from "./Dropdown.scss"
import { useState } from "react";

const Dropdown =({title, src, text}) => {
    const [dropdown, setDropdown] = useState(false);

    function handleDropdown() {
        setDropdown(!dropdown)
        console.log(dropdown)
    }

    return (
        <div className={"dropdown_item"}>
            <h3 className={"dropdown_title"} onClick={handleDropdown}>{title}<img className={"chevron"} src={src} alt="flêche"/></h3>
            <div className={`${"dropdown_text"} ${dropdown ? 'active' : ''}`}>
                {text}
            </div>
        </div>  
    )
}

export default Dropdown;