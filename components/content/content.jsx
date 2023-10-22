'use client'
import React, {useState} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Link from "next/link";
import Text from "@/components/content/pages-content/text";
import PageOne from "@/components/content/pages-content/PageOne";
import PageTow from "@/components/content/pages-content/PageTow";
import PageThree from "@/components/content/pages-content/PageThree";
import PageFour from "@/components/content/pages-content/PageFour";
import PageFive from "@/components/content/pages-content/PageFive";
import {Button, ButtonGroup} from "@mui/material";


const Content = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();
    const path = usePathname();

    const handleNext = () => {
        if (currentIndex < Text.length - 1) {
            const nextIndex = currentIndex + 1;
            const nextPath = `/${nextIndex + 1}`;
            setCurrentIndex(nextIndex);
            window.history.pushState({}, '', nextPath);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            const prevPath = `/${prevIndex + 1}`;
            setCurrentIndex(prevIndex);
            window.history.pushState({}, '', prevPath);
        }
    };

    const handleClick = (index) => {
        setCurrentIndex(index)
        window.history.pushState({}, '', index + 1);
    }


    console.log('page is :', '/' + (currentIndex + 1))
    console.log('path is ', path)

    let sculpture = Text;
    console.log(sculpture[currentIndex])

    return (
        <div>
            <div className="">
                <ButtonGroup variant="outlined"
                             style={{display: 'flex', justifyContent: "start", direction: 'rtl', marginRight: '10px'}}
                             aria-label="outlined button group">

                    {Text.map((text, index) => (


                        <Button onClick={() => handleClick(index)}
                                style={{color: currentIndex === index ? 'red' : 'black', border: '1px solid blue'}}
                                key={index}>مرحله ی {index + 1} </Button>


                    ))}
                </ButtonGroup>
            </div>
            <h1>صفحه اصلی</h1>
            {sculpture}
            <h3>
                ({currentIndex + 1} of {Text.length})
            </h3>


            <div style={{height:'420px'}}>
                {currentIndex === 0 ? (<PageOne/>) :
                    currentIndex === 1 ? (<PageTow/>) :
                        currentIndex === 2 ? (<PageThree/>) :
                            currentIndex === 3 ? (<PageFour/>) :
                                currentIndex === 4 ? (<PageFive/>) :
                                    (<div>Sorry</div>)}
            </div>


            <button onClick={handlePrev}>قبلی</button>
            <button onClick={handleNext}>بعدی</button>
        </div>
    );
};

export default Content;