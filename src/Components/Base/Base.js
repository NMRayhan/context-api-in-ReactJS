import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Deep from '../Deep/Deep';


const Base = () => {
    const [count, setCount] = useContext(categoryContext)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <Deep></Deep>
        </div>
    );
};

export default Base;