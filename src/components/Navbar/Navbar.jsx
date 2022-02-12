import React from 'react';
import s from './Navbar.module.css';
import {Link} from "react-router-dom"

const Navbar = () => {

    return <nav className={s.nav}>
        <div className={`${s.item}${s.active}`}><Link to="/profile" >
            Profile </Link>
        </div>
        <div className={`${s.item}${s.active}`}><Link to="/dialogs">
            Messages</Link>
        </div>
        <div className={`${s.item}${s.active}`}><Link>
            Music </Link>

        </div>
        <div className={`${s.item}${s.active}`}><Link>
        News</Link>
        </div>
        <div className={`${s.item}${s.active}`}><Link>
        Settings</Link>
        </div>
    </nav>

}
export default Navbar;