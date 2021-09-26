import React from 'react';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Home = ({authService}) => {
    return(
        <>
        <Header authService={authService}></Header>
        <Footer></Footer>
        </>
    );
}
export default Home;