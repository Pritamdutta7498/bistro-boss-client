import React from 'react';

const MenuItem = ({item}) => {
    const{name, recipe, image, price} = item;
    // console.log(name);
    return (
        <div className='flex space-x-3 '>
            <img src={image} alt="" style={{borderRadius: "0px 200px 200px 200px"}} className='w-[118px]' />
            <div>
                <h2 className='text-2xl font-semibold text-zinc-600'>{name}-----</h2>
                <p className='  text-zinc-500'>{recipe}</p>
            </div>
            <p className='font-bold text-xl  text-orange-500'>${price}</p>
        </div>
    );
};

export default MenuItem;