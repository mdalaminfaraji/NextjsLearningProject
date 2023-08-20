import React from 'react';
import Sidebar from './sidebar';

const layout = ({children}) => {
    return (
        <div className='flex container mx-auto '>
            <Sidebar></Sidebar>
            {children}
        </div>
    );
};

export default layout;