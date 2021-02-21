import React from 'react'
import { Route } from 'react-router-dom';
import FeedBack from '../Components/FeedBack';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
// import Login from '../Page/User/Login';

export const HomeTemplate = (props) => {
    let { Component, ...restParam } = props;
    return (
        <Route
            {...restParam}
            render={(propsRoute) => {
                return (
                    <>
                        <div className="chaCuaFeedBack">
                            <div >
                                <Header />
                                <Component {...propsRoute} />

                                <Footer />
                            </div>
                            <div className="">
                                <FeedBack />
                            </div>
                        </div>

                    </>
                );
            }}
        />
    );
};
