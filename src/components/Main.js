import React, {useContext} from 'react';
import MainContext from '../context/context';
import SideBar from './SideBar';
import Chat from './Chat';
import '../App.css';

const Main = () => {
    const name = useContext(MainContext);

    return(
       <div className="main_box">
            <SideBar/>
            <Chat/>
       </div>
    )
}

export default Main;