"use client"
import React from 'react';
import { useParams } from 'next/navigation'
function Phrase(props) {
    const params = useParams()
    let toArray = params.phrase_text.split("")

    console.log(toArray)
    return (
        <div className="phrase">
            {toArray.map((letter) => {
                return (
                    <span key={1}>
                        {letter}
                    </span>
                )
            })}
        </div >
    );
}

export default Phrase;