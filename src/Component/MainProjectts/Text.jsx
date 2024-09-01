import React, { Children } from 'react';
import Book from './Book';

const Text = ({ bookmarks }) => {
    return (
        <div id='cound'>
            <p className='text-3xl font-bold p-3 border-2'>Cound your all day soend time </p>
            <Book bookmarks={bookmarks}></Book>
        </div>
    );
};

export default Text;