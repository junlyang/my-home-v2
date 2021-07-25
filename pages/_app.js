import React from 'react';
import Head from 'next/head';
import AppLayout from '../partials/AppLayout';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import wrapper from '../store/configureStore';

// eslint-disable-next-line react/prop-types
const MyHome = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>량량스</title>
                <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </>
    )
}

MyHome.prototypes = {
    Component: PropTypes.elementType,
    pageProps: PropTypes.object
}

export default wrapper.withRedux(MyHome)