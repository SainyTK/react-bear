import React, { useState } from 'react';
import './InputForm.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { BearActions, FormActions } from '../redux/store';

const InputForm = () => {

    const form = useSelector(state => state.Form);

    const actions = bindActionCreators({ ...BearActions, ...FormActions }, useDispatch());

    return (
        <div className='form-container'>
            <h2>Add bear</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => actions.changeName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => actions.changeWeight(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => actions.changeImg(e.target.value)} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={() => actions.addBear(form)}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm