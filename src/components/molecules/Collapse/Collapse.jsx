import "./Collapse.scss"
import { useState } from "react";

const Collapse =({title, src, text}) => {
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
                            <li key={index}>{item}</li>
                        ))
                        : <li>{text}</li>
                    }
                </ul>
            </div>
        </div>  
    )
}

export default Collapse;