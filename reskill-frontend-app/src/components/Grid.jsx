import {Link} from 'react-router-dom';
import GridTile from './GridTile';
import { useEffect, useState } from 'react';

function Grid() {
  
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

  return (
  <div className="page">

    {data && photo && data.map(item => (
      item.id === 1 ? (
        <div key={item.id} className="mainPost"> 
            <h1 className="mainP-Title">{item.title}</h1>
            <img src={photo.find(element => element.id === item.id)?.url}/>
            <p>{item.body}</p>
        </div>
        ) : null
    ))}
    {/*Main Post keeps the structure of the grid tiles underneath but we use the bigger picture not the thumbnail*/}
  
  
  
    <div className='middle'>
      <div className='middle-photos'>
        <img className='middle-photos' src={photo.find(element => element.id === 1)?.url}/>
        <img className='middle-photos' src={photo.find(element => element.id === 1)?.url}/>
      </div>

      {data.map(item=>(
        item.id < 10 ? (
      <div  key={item.id} className='middle-text'>    
        <p>{item.body}</p>
      </div>
        ):null
      ))}

    </div>

    <h2 className='subtitle'>Related Articles and Posts</h2>


    <div className="grid-container">
    {data && photo && data.filter(item => item.id > 1 && item.id <= 10).map(item => (
      <Link key={item.id} to={{pathname: `/posts/${item.id}`, data: {data}, photo:{photo}}}>  
        <GridTile key={item.id} item={item} photos={photo}/>
      </Link>
      ))}
    </div>

  </div>
  )
}

export default Grid