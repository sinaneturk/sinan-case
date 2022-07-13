import './home.style.css'
import React from 'react'

function Home({local_vocab}) {
 
    return (
        <div className="home-container" >
            <h6 className="content-title">{local_vocab.home_content_title}</h6>
            <p className="content">{local_vocab.home_content}</p>
        </div>
    );
 
}

export default Home;