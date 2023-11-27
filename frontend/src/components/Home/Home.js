import React from 'react';
import './Home.scss';
import Header from '../Molecules/Header/Header';
import TextFieldComponent from '../Molecules/TextField/TextField';
import PagesList from '../Molecules/PagesList/PagesList';

const Home = () => {
  return (
    <div className='main'>
      <Header />
      <div className='content'>
        <TextFieldComponent />
        <PagesList />
      </div>
    </div>
  );
};

export default Home;
