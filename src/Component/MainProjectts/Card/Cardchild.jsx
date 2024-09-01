import React from 'react';

const Cardchild = ({ children, handleBtnClick }) => {
    const { author, image, publishedDate, title } = children
    console.log(children)
    return (
        <div className=''>
             <img className='h-full w-full border-2' src={image} alt="" />
             <div className='flex mt-4 justify-between'>
                <p className='text-3xl font-bold'>Sourov Chandra</p>
                <p className='text-3xl font-bold'>{publishedDate}</p>
             </div>
             <p className='mt-5 text-6xl font-bold flex mb-5 justify-start  '>{title}</p>

             <button onClick={()=>handleBtnClick(children)} className="flex justify-start text-3xl font-bold text-red-600">mark as read </button>
            )
        </div>
    );
};

export default Cardchild;