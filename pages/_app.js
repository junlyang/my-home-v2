import React from 'react';
import Head from 'next/head';
import AppLayout from '../partials/AppLayout';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';

const MyHome = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>량량스</title>
            </Head>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </>
    )
}

MyHome.prototypes = {
    Component: PropTypes.elementType,
}

export default wrapper.withRedux(MyHome)