import React from 'react';
import './Feed.css';
import StoryRell from './StoryRell/StoryRell';

const Feed = () => {
    const post = {
        text:'Onek din por desha gurta aslam',
        likes:33,
        comments:[
            {name:'swapno',text:'Wow'},  
            {name:'swapno',text:'Wow'},  
            {name:'swapno',text:'Wow'}
        ]
    }
    const addtoDatbase = () =>{
        fetch(`http://localhost:2000/addPost`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(post)
         
          
   })
    }
    return (
        <div className="storyRell">\
        <button onClick={addtoDatbase}>add to database</button>
            <StoryRell />
        </div>
    );
};

export default Feed;