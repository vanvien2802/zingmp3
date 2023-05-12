import React from 'react';
import HeaderContainer from './HeaderContainer';
import BodyApp from './BodyApp';

function Container() {
    return (
        <div className="col-span-5 bg-cyan-950 h-screen-sidebar">
            <HeaderContainer/>
            <BodyApp/>
        </div>
    );
}

export default Container;