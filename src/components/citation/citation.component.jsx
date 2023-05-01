import React, { useState } from 'react';
import './citation.scss';


const Citation = (props) => {
    const { citation, reference } = props;
    return (
        <>
            { citation?.length ? <div className="title">Cited By</div> : null }
            {citation?.map((val, key) => {
                return (
                    <div className="description">
                       <span className="break-word"> {key+1}. {val.description} {val.text}</span>
                       <a href={val.link} className="citation-link">{val.link}</a>
                    </div>
                )
            })}

            { reference?.length ? <div className="title">Reference</div> : null }
            {
                reference?.map((val, key)=>{
                    return (
                        <div className="description">
                            <span className="break-word"> {key+1}. {val.text}</span>
                            <a href={val.link} className="citation-link">{val.link}</a>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Citation;