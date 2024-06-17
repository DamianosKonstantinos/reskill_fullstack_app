/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const GridTile = ({ item, photos }) => {
    const photo = photos.find(element => element.id === item.id);
    return (
        <div key={item.id} className="gridTile">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {photo && <img src={photo.thumbnailUrl} alt={item.title} />}
            <p>Author No.{item.userId}</p>
        </div>
    );
};

export default GridTile;
