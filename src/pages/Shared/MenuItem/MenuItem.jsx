import React from 'react';

const MenuItem = ({item}) => {
    const{name, recipe, image, price} = item;
    console.log(name);
    return (
        <div>
            <h3>menu item</h3>
        </div>
    );
};

export default MenuItem;