import Banner from '../../atoms/Banner/Banner';
import Dropdown from '../../molecules/Dropdown/Dropdown';
import './About.scss';
import Arrow from "../../../assets/images/arrow.png"
import apropos from '../../../data/apropos.js';

function About() {
    return (
        <main>
            <Banner/>
            <div className={"about_dropdown"}>
                {apropos.map((item, index) => (
                    <Dropdown 
                        key={index}
                        title={item.category}  // Utilise "category" comme titre
                        src={Arrow}
                        text={item.text}  // Utilise "text" comme contenu
                    />
                ))}
            </div>
        </main>
    )
}

export default About;