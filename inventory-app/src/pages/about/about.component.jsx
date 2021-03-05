import React from 'react';

import { RiEdit2Line, RiCloseCircleLine } from "react-icons/ri";

import './about.styles.css';

const aboutPage = props => (
    <div className="para">
        <h1>About</h1>


        <p>Welcome to the website. <br></br><br></br>
            This is an implementation of a basic CRUD app using MERN stack.</p>
        <ul>
            <li><div className="crud">Create</div><div className="bodypara">To <b>create</b> an item, please click on the 'Add Item' link on the main page.</div></li>
            <li><div className="crud">Read</div><div className="bodypara">The items shown on the main page are the items in the database and therefore represent the <b>R</b> part of the C<b>R</b>UD.</div></li>
            <li><div className="crud">Update</div><div className="bodypara">The items can be <b>updated</b> by clicking the update icon <RiEdit2Line /> on each item's image.</div></li>
            <li><div className="crud">Delete</div><div className="bodypara">Click on the delete icon <RiCloseCircleLine /> on the item image to <b>delete</b> the item in the database.</div></li>
        </ul>
{/* 

            <div className="crud">Create</div><div className="bodypara">To <b>create</b> an item, please click on the 'Add Item' link on the main page.</div>
            <div className="crud">Read</div><div className="bodypara">The items shown on the main page are the items in the database and therefore represent the <b>R</b> part of the C<b>R</b>UD.</div>
            <div className="crud">Update</div><div className="bodypara">The items can be <b>updated</b> by clicking the update icon <RiEdit2Line /> on each item's image.</div>
            <div className="crud">Delete</div><div className="bodypara">Click on the delete icon <RiCloseCircleLine /> on the item image to <b>delete</b> the item in the database.</div> */}



    </div>
)

export default aboutPage;
