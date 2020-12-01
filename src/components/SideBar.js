import React, { useContext } from 'react';
import MainContext from '../context/context';


const SideBar = () => {
    const name = useContext(MainContext)
    return(
        <div className="side_bar">
            <div className="namespace">
                <h2>Groups</h2>
            </div>
            <div className="rooms">
               <h2>Rooms</h2>
            </div>
        </div>
    )
}

export default SideBar;