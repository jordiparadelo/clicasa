import React from 'react';
// Containers
import {Navbar, Footer} from 'containers';

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
};

export default Layout;