import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 
        <nav className = "navbar">
            <h1><a href = "/"> adi's blog</a></h1>
            <div className = "links">
                <Link to= "/" > Home </Link>
                <Link to = "/create" > new blog </Link>
                <Link to = "/contact">contact me!</Link>
            </div>
        </nav>
     );
}
 
export default Nav;