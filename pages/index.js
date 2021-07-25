import React, { useEffect } from 'react';
import Link from 'next/link';
import { loginAction, logoutAction } from '../reducers/user';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(loginAction);
        dispatch(logoutAction);
        dispatch(loginAction);

    },[])
    return (
        <>
            <Link href="/about"><a>about</a></Link>
            <div>Hello, It&apos;s Me</div>
           
        </>
    )
};

export default Home;