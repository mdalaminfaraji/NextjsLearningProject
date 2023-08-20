import NavLink from '../../component/NavLink';

import React from 'react';
const navLinks=[
    {
        path:'/dashboard',
        title:'Dashboard'
    },
    {
        path:'/dashboard/quotes',
        title:'Quotes'
    },
    {
        path:'/dashboard/admin',
        title:'Admin Dashboard'
    },
    {
        path:'/dashboard/instructor',
        title:'Instructor'
    },
    {
        path:'/dashboard/student',
        title:'Student'
    },
    {
        path:'/',
        title:'Home'
    }
]

const Sidebar = () => {
    return (
        <aside className='border-2 bg-red-300 h-screen'>
           <ul >
            {
                navLinks.map(({path, title})=>(
                    <li className='p-2' key={path}>
                        <NavLink exact activeClassName="text-blue-500" href={path}>{title}</NavLink>
                    </li>
                ))
            }
            </ul> 
        </aside>
    );
};

export default Sidebar;