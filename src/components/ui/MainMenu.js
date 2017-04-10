import { Link } from 'react-router'

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
