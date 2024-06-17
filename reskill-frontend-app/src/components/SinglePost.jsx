/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../App.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SinglePost = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/posts')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    useEffect(() => {
    fetch('http://localhost:3000/photos')
        .then(response => response.json())
        .then(photo => setPhoto(photo));
    }, []);

    return  (  
    <div>
        {data && photo && data.map(item => (
        item.id === Number(id) ? (
        <div key={id} className="mainSinglePost">
            <div key={item.id} className="mainPostText"> 
                <h1 className="mainP-Title">{item.title}</h1>
                <h3>-Author No.{item.userId}</h3>
                <p>{item.body}</p>
            </div>
            <img src={photo.find(element => element.id === item.id)?.url}/>
        </div>
        ) : null
    ))}
    </div> 
    )
};

export default SinglePost;
