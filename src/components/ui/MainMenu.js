import { Link } from 'react-router'
import '../../stylesheets/Header.scss';

const MainMenu = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "slategray"
            	}}>
            	About
            </Link>
        </nav>
    )
}

export default MainMenu
