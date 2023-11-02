'use client'
import React, {useMemo} from 'react';
import {useRouter, useParams} from 'next/navigation';
import {Button, ButtonGroup} from "@mui/material";


const MultiStep = ({pages, title}) => {
    const router = useRouter();
    const params = useParams()
    const currentPage = useMemo(() => +params.currentPage, [params])
    const handleNext = () => {
        if (currentPage < pages.length) router.push(`/${currentPage + 1}`)
    };

    const handlePrev = () => {
        if (currentPage > 1) router.push(`/${currentPage - 1}`)
    };

    const handleClick = (index) => {
        router.push(`/${index + 1}`)
    }

    const Page = useMemo(() => pages[currentPage - 1], [currentPage])

    return (
        <div>
            <div className="">
                <ButtonGroup variant="outlined"
                             style={{display: 'flex', justifyContent: "start", direction: 'rtl', marginRight: '10px'}}
                             aria-label="outlined button group">
                    {pages.map((page, index) => (
                        <Button onClick={() => handleClick(index)}
                                style={{color: currentPage === index + 1 ? 'red' : 'black', border: '1px solid blue'}}
                                key={index}>مرحله ی {index + 1} </Button>
                    ))}
                </ButtonGroup>
            </div>
            <h1>{title}</h1>
            <h3>
                ({currentPage} of {pages.length})
            </h3>

            <div style={{height: '420px'}}>
                <Page/>
            </div>
            <button disabled={currentPage <= 1} onClick={handlePrev}>قبلی</button>
            <button disabled={currentPage >= pages.length} onClick={handleNext}>بعدی</button>
        </div>
    );
};

export default MultiStep;