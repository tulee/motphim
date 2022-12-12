// import { useEffect, useRef, useState } from 'react';
import React, { Component }  from 'react';
import './style.css';
// import 'video.js/dist/video-js.css';

export default function ViewMovie(){

    return(
        <div className="video-container">
            <video id="content_video" controls preload="auto" controlsList="nodownload">
                <source src={require('./source/video/video.mp4')} type="video/mp4" />
                <track label="English" kind="subtitles" srcLang="en" src={require('./source/vtt/sintel-en.vtt')} default />
                <track label="German" kind="subtitles" srcLang="de" src={require('./source/vtt/sintel-de.vtt')} default />
                <track label="Spanish" kind="subtitles" srcLang="es" src={require('./source/vtt/sintel-es.vtt')} default />
            </video>
        </div>
    )
}