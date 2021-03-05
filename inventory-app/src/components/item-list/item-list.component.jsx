import React from 'react';

import  Item  from '../item/item.component';
import {Link} from 'react-router-dom';
import './item-list.styles.scss'

import CustomButton from '../custom-button/custom-button.component';

class ItemList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            items: null

        }
    }


    async componentDidMount() {
        
        // const url = "http://localhost:5000/api/products";
        const url = "https://desolate-fjord-62722.herokuapp.com/api/products";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        
        this.setState({ items: data, loading: false })
        console.log(this.state.items._id);


    }


    render() {

        return (

            <div>
                <h1><center>CRUD App for Inventory</center></h1>
                <div className="links"><center><Link to="/additem">Add Item</Link> <Link to="/about">About</Link></center></div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                {this.state.loading || !this.state.items ? (
                    <div> loading...</div>
                ) : (
                        <div className="item-list">
                            {
                                this.state.items.map(({ department, name, size, corrosionfree, material, weight, _id}) => {
                                    return <div>
                                        <Item department={department} name={name} size={size} corrosionfree={corrosionfree} material={material} weight={weight} id={_id}  />
                                    </div>

                                })
                            }

                        </div>
                    )


                }
            </div>
        )
    }


}


export default ItemList;

