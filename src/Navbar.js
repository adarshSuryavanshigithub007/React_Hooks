import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    {/* <li>
                        <NavLink to="/todo" activeClassName="active">
                           todo useReducer
                        </NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/count" activeClassName="active">
                            Count useReducer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/usestate" activeClassName="active">
                            UseState
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/useeffect" activeClassName="active">
                            UseEffect
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/darkthem" activeClassName="active">
                            useContext
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todolist" activeClassName="active">
                            Todo List useReducer
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/usememo" activeClassName="active">
                            useMemo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar