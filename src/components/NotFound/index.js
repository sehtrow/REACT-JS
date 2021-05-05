import React, { Fragment } from 'react';
import Message from '../Common/Message';
import DinamicButton from '../Common/DinamicButton';

const NotFound = () => (
    <Fragment>
        <Message text="404: URL Not Found" />
        <DinamicButton type="back" to="/" />
    </Fragment>
);

export default NotFound;