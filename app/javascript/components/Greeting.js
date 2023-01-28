import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greet)

  useEffect(() => {
    dispatch(fetchGreeting())
  }, []);
  console.log(greet)

  const handleGreeting = () => {
    dispatch(fetchGreeting())
  };

    return (
      <div className="div">
        <h1>{greet}</h1>
          <button onClick={handleGreeting}>Greet Randomly</button>
      </div>
    );
}

export default Greeting;
