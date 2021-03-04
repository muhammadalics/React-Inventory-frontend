import React from 'react';

import './about.styles.css'

const aboutPage = props => (
    <div>
        <h1>About</h1>
        <div className="alltext">
            <p>Welcome to the website. This website implements a basic CRUD app using MERN stack.</p>
            <p>To <b>create</b> an item, please click on the 'Create Item' link above. The items shown on this page are the
                items in the database and therefore represent the <b>R</b> part of the C<b>R</b>UD. The items can be <b>updated</b> by clicking the update icon
                on each item's image. Click on the delete icon on the item image to <b>delete</b> the item.</p>
        </div>
    </div>
)

export default aboutPage;
