import React, { useEffect } from 'react';
import BearList from './components/BearList';
import InputForm from './components/InputForm';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { BearActions } from './redux/store';

export default () => {

  const actions = bindActionCreators(BearActions, useDispatch());

  useEffect(() => {
    actions.getBears();
  }, []);

  return (
    <div>
      <h2>Bears</h2>
      <BearList />
      <InputForm />
    </div>
  )
}
