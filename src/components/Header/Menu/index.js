import React, { useState } from 'react';
import "./index.css";

export default function Menu() {

    const [menu, setMenu] = useState([
        {
            id:1,
            title: 'Home',
            active: false,
            ref:'#',
        },
        {
            id:2,
            title: 'Documentation',
            active: false,
            ref:'#',
        },
        {
            id:3,
            title: 'Example',
            active: false,
            ref:'#',
        },
        {
            id:4,
            title: 'Icons',
            active: false,
            ref:'#',
        },
        {
            id:5,
            title: 'Themes',
            active: false,
            ref:'#',
        },
        {
            id:6,
            title: 'Expo',
            active: false,
            ref:'#',
        },
        {
            id:7,
            title: 'Blog',
            active: false,
            ref:'#',
        }
    ])

    function toggleli(id){
        document.title = menu[id-1].title;
        const newMenu = menu.filter(item =>{
            if(item.id===id)
                item.active = true;
            else
                item.active = false;
            return item;
        })
        setMenu(newMenu);
    }

    return (
        <div className="menu">
            <ul>
                {menu.map(item => {
                    return(
                    <li key={item.id}>
                        <a className={item.active ?"active":""}
                         href={item.ref}
                         onClick={()=>toggleli(item.id)}>
                            {item.title}
                        </a>
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}