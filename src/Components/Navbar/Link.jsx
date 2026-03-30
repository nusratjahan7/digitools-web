import React from 'react';

const Link = ({route}) => {
    return (
        <li className='lg:mr-10 px-4 py-1 hover:bg-gray-300 hover:text-black'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;