import React from 'react';

import {Item} from '../item/item.component';


import './item-list.styles.scss'

class ItemList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            items: null

        }
    }


    async componentDidMount() {

        const url = "http://localhost:5000/api/products";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        this.setState({ items: data, loading: false })


    }


    render() {

        return (

            <div>
                {this.state.loading || !this.state.items ? (
                    <div> loading...</div>
                ) : (
                        <div className="item-list">
                            {
                                this.state.items.map(({ department, name, size, corrosionfree, material, weight}) => {
                                    return <div>
                                        <Item department={department} name={name} size={size} corrosionfree={corrosionfree} material={material} weight={weight} />
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

