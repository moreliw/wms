import Menu from '../components/Menu';
import Miranha from '../miranhaBrabo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <div>
            <Menu />
            Home 
            <img src={Miranha} alt="miranhaBrabo"/>
                       
       
        </div>
    );
}

export default Home;
