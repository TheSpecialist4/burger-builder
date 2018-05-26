import React from 'react';

import classes from './Layout.css'

const layout = (props) => (
    <React.Fragment>
        <div>Toolbar, side navigation</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
);

export default layout;