import Banner from '../../atoms/Banner/Banner';
import ListLogements from '../../molecules/ListLogements/ListLogements';
import './Home.module.scss';

function Home () {
    return (
        <main>
            <Banner/>
            <ListLogements/>
        </main>
    )
}

export default Home;