import { useState } from "react";
import Button from "../Button";
import "./slideshow.css"

const LIMIT = 20;
export default function SlideShow(){
    const [currentId,setCurrentId] = useState(0);
    const handlePre = ()=>{
        setCurrentId(currentId-1)
    }

    const handleNext = ()=>{
        setCurrentId(currentId+1)
    }

    const handleBack = ()=>{
        setCurrentId(0);
    }

    const handleEnd = ()=>{
        setCurrentId(LIMIT-1);
    }

    return <div className="slideshow-wrapper">
        <div className="slideshow-image-holder">
            <img src={`https://picsum.photos/300/200?image=${currentId}`} width={'auto'} height={'100%'}/>
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
    </div>
}