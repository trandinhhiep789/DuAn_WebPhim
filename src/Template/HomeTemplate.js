import React from 'react'
import { Route } from 'react-router-dom';
import FeedBack from '../Components/FeedBack';
import Footer from '../Components/Footer';
import Header from "../Components/Header";
// import Login from '../Page/User/Login';


import MessengerCustomerChat from 'react-messenger-customer-chat';




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

                            <MessengerCustomerChat
                                pageId="112035807606509"
                                appId="199663805249114"
                            />
                        </div>


                    </>
                );
            }}
        />
    );
};
