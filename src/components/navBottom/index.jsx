import React from 'react';
import { Link } from 'react-router-dom';
import {menus} from '../../constants/menu'

class NavBottom extends React.Component {
    render() {
        return (
            <ul>
                { menus.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default NavBottom;