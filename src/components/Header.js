import React from "react";
import  { NavLink} from 'react-router-dom';

            const Header=() => (
                <header>
                <h1>Expensify </h1>
                <ul> 
               <li> <NavLink to="/" activeClassName="is-active" exact={true}> Dasboard page </NavLink></li>
               <li> <NavLink to="/create" activeClassName="is-active"> create page </NavLink></li>
             
               <li> <NavLink to="/help" activeClassName="is-active"> help page </NavLink></li>
             </ul>
                </header>
            );
                export default Header;