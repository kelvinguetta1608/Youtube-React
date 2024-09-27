import React from 'react';
import "./youtube.css";

const Youtube = ({ videoId = "46EtAffNaxU" }) => {
    return (
        <div className='container' >
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${videoId}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Youtube;
