import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/AlgoShowcasePage">Geo Topic Modeling</Link>
                <Link to="/RegionSearchPage">Region Search</Link>
                <Link to="/AlgoShowcasePage">Region Topic Exploration</Link>
                <Link to="/DeepRegionRepresentationPage">Deep Region Representation</Link>
                <Link to="https://personal.ntu.edu.sg/gaocong/projectS.html" target="_blank">Related Reseach Projects</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;