import React, { useRef, useState } from 'react'
import cl from './Slider.module.css'

export const Slider = ({ items }: { items: any }) => {
    const [sliderWidth, setSliderWidth] = React.useState(0);
    const selectedRef = useRef<any>(null);
    const [index, setIndex] = useState(0);

    const moveRight = () => {
        if (index < items.length - 1) {
            setIndex(index + 1);
        }
        else if (index === items.length - 1) {
            setIndex(0);
        }
    }
    const moveLeft = () => {
        if (index === 0) {
            setIndex(items.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }
    const classTriger = (i: number) => {
        if (index === i) {
            return cl.slider_item_active;
        }
        if (index === i + 1 && index !== items.length - 1) {
            return cl.slider_item_prev;
        }
        if (index === i - 1 && index !== 0) {
            return cl.slider_item_next;
        }
        if (index === 0 && i === items.length - 1) {
            return cl.slider_item_prev;
        }
        if (index === 0 && i === index + 1) {
            return cl.slider_item_next;
        }
        if (index === items.length - 1 && i === 0) {
            return cl.slider_item_next;
        }
        if (index === items.length - 1 && i === index - 1) {
            return cl.slider_item_prev;
        }
        if (index !== i && index !== i - 1 && index > i) {
            return cl.slider_item_left;
        }
        if (index !== i && index !== i + 1 && index < i) {
            return cl.slider_item_right;
        }
    }
    return (
        <div className={cl.slider} onTouchMove={(e) => console.log(e)
        }>
            <div className={cl.slide_line} style={{ width: `calc(100% * (${items.length}/3))` }}>
                {items.map((item: any, i: number) => (
                    <div key={i} className={classTriger(i)} style={{ height: '250px', width: '230px' }}>
                        {item}
                    </div>

                ))}
            </div><button onClick={() => {
                moveRight();
            }}>Right</button>
            <button onClick={() => moveLeft()}>Left</button>
        </ div>
    )
}
