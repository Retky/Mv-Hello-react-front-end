import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/greetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(store => store.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  } , [dispatch]);

  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greeting;
