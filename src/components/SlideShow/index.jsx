import { useState } from "react";
import Button from "../Button";
import "./slideshow.css"

const LIMIT = 20;
const RESOLUTION = [[300,200],[400,200]];
export default function SlideShow(){
    const [currentId,setCurrentId] = useState(0);
    const [size,setSize] = useState(0);
    const handlePre = ()=>{
        setCurrentId(pre=>pre-1)
    }

    const handleNext = ()=>{
        setCurrentId(pre=>pre+1)
    }

    const handleBack = ()=>{
        setCurrentId(0);
    }

    const handleEnd = ()=>{
        setCurrentId(LIMIT-1);
    }

    const handleRand = ()=>{
        setCurrentId(Math.round(Math.random()*(LIMIT-1)));
    }

    const handleResize = ()=>{
        setSize(pre=>(pre+1)%RESOLUTION.length);
    }

    return <div className="slideshow-wrapper">
        <div className="slideshow-image-holder">
            <img src={`https://picsum.photos/${RESOLUTION[size][0]}/${RESOLUTION[size][1]}?image=${currentId}`} width={'auto'} height={'100%'}/>
            <div className="slideshow-thumbnail-holder thumnail-holder left">
                <img src={`https://picsum.photos/300/200?image=${currentId-1}`} width={'auto'} height={'100%'}/>
            </div>
            <div className="slideshow-thumbnail-holder thumnail-holder right">
                <img src={`https://picsum.photos/300/200?image=${currentId+1}`} width={'auto'} height={'100%'}/>
            </div>
        </div>
        <div className="slideshow-menu">
            <div>
                <Button onClick={handleBack} variant={"secondary"}>{"<<"}</Button>
                <Button onClick={handlePre} variant={currentId<1?'disabled':''}>Pre</Button>
            </div>
            <h3>{currentId+1}/{LIMIT}</h3>
            <div>
                <Button onClick={handleNext} variant={(currentId>=(LIMIT-1))?'disabled':''}>Next</Button>
                <Button onClick={handleEnd} variant={"secondary"}>{">>"}</Button>
            </div>
        </div>
        <div className="slideshow-setting">
            <Button onClick={handleRand}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dice-3-fill" viewBox="0 0 16 16">
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg></Button>
            <Button onClick={handleResize}>
            {size>0?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
            </svg>}
            </Button>
        </div>
    </div>
}