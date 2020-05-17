import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


export class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <nav>
                            <Link to="/home">Home</Link>
                            <Link to="/news">News</Link>
                            <Link to="/profile">Profile</Link>
                    </nav>
                </div>
            </Router>    
        );
    }
}

export default Navbar;