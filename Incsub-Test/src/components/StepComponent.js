import React from 'react'

const StepComponent = ({stepNumber}) => {

    return (
        <div className="flex justify-end gap-1 font-small mb-20">
            <p>Step {stepNumber} of 3</p>
            <div className="flex justify-center items-center gap-1">
            <div className={`circle  ${stepNumber === 1? 'selected': null}`} ></div>
            <div className={`circle  ${stepNumber === 2? 'selected': null}`}></div>
            <div className={`circle  ${stepNumber === 3? 'selected': null}`}></div>
            </div>
        </div>
    )
}

export default StepComponent;
