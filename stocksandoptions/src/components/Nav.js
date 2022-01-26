import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to='home'>Home</Link>
            <Link to='amazon'>Amazon</Link>
            <Link to='apple'>Apple</Link>
            <Link to='facebook'>Facebook</Link>
            <Link to='google'>Google</Link>
            <Link to='microsoft'>Microsoft</Link>
            <Link to='tesla'>Tesla</Link>
        </nav>
    );
}

export default Nav;