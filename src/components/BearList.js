import React from 'react';
import BearCard from './BearCard';
import './BearList.css';
import { useSelector } from 'react-redux';

const BearList = props => {

    const bears = useSelector(state => state.Bear);

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;