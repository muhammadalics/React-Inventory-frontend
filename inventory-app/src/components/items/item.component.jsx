import React from 'react';

//const express = require('express');

//import './item.styles.scss'

class Item extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            items: null

        }
    }


    async componentDidMount() {
        //console.log(this.state.items)
        const url = "http://localhost:5000/api/products";
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        this.setState({ items: data, loading: false })
        //console.log(this.state.items)

    }


    render() {

        return (

            <div>
                {this.state.loading || !this.state.items ? (
                    <div> loading...</div>
                ) : (
                        <div>
                            {
                                this.state.items.map(({ department, name, size, corrosionfree, material, weight}) => {
                                    return <div>
                                        <div>{department}</div>
                                        <div>{name}</div>
                                        <div>{size}</div>
                                        <div>{corrosionfree}</div>
                                        <div>{material}</div>
                                        <div>{weight}</div>
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


export default Item;

