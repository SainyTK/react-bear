import React, { useState } from 'react';
import './BearCard.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { BearActions } from '../redux/store';

const BearCard = props => {

    const actions = bindActionCreators(BearActions, useDispatch());
    const form = useSelector(state => state.Form);

    const { id, name, weight, img } = props;

    const updateBear = () => {
        actions.updateBear(id, { id, ...form })
    }

    const deleteBear = () => {
        actions.deleteBear(id);
    }

    return (
        <div className='bearcard-container'>
            <div className='bearcard' style={{ backgroundImage: `url('${img}')` }}>
                <p className='bearcard-weight'>{weight}</p>
                <p className='bearcard-name'>{name}</p>
            </div>
            <div className='bearcard-actions'>
                <div onClick={updateBear}>Update</div>
                <div onClick={deleteBear}>Delete</div>
            </div>
        </div >

    )
}

export default BearCard;