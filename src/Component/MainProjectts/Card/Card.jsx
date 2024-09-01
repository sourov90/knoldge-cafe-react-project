import  { useEffect, useState } from 'react';
import Cardchild from './Cardchild';
import Text from '../Text';

const Card = () => {
    const [data,setData] = useState([])
    const [bookmarks, setBookmarks] = useState([])

    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(da=>setData(da))
        
    },[])

    console.log(bookmarks)
    //hadnle btn keep cardchild btn

    const handleBtnClick = (id) =>{
        const newBookmarks = [...bookmarks,id];
        setBookmarks(newBookmarks)
    }
 
    return (
        <div className='flex justify-between gap-10'>
          <div>
                {
                    data.map(childre => <Cardchild children={childre}
                        handleBtnClick={handleBtnClick}
                    ></Cardchild>)
                }
          </div>
            <Text bookmarks={bookmarks}></Text>
        </div>
    );
};

export default Card;