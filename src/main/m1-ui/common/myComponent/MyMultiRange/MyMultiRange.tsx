import React from "react";
import {CustomMode, Handles, Rail, Slider} from 'react-compound-slider';
import s from './MyMultiRange.module.css';
import {Handle} from "./Handle";


type MultiRangeType = {
    domain: number[]
    step: number
    mode: 1 | 2 | 3 | CustomMode | undefined
    values: number[]
    onChange: (value:  number[]) => void
}

export const MyMultiRange = (props: MultiRangeType) => {
    const {domain, step, mode, values,onChange} = props;

    const OnChange = (values: readonly number[]) => {
        onChange([...values])
    }


    return <Slider
        className={s.slider}
        domain={domain}
        step={step}
        mode={mode}
        values={values}
        onChange={OnChange}>


        <Rail>
            {({getRailProps}) => (
                <div className={s.railStyle} {...getRailProps()} />
            )}
        </Rail>
        <Handles>
            {({handles, getHandleProps}) => (
                <div className="slider-handles">
                    {handles.map(handle => (
                        <Handle
                            key={handle.id}
                            handle={handle}
                            getHandleProps={getHandleProps}
                        />
                    ))}
                </div>
            )}
        </Handles>
    </Slider>
}
