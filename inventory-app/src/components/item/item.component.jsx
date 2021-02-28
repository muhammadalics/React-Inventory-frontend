import React from 'react';

import { Redirect } from "react-router-dom";

import './item.styles.css'


// export const Item = (props) => (
//     <div className="img-div">       
        
//         <div className="span" onClick={props.OnClickX}>X</div> 
//         {/* {<div className="span" onClick={handleDelete(props.id)}>X</div>  }
//         <div className="span">X</div> */}
//         <img className="image" src={props.department}/>

//         <div>{props.name}</div>
//         <div>{props.size}</div>
//         <div>{props.corrosionfree}</div>
//         <div>{props.material}</div>
//         <div>{props.weight}</div>
//     </div>
// )

// async function handleDelete(id) {
//     alert('You are deleting this item!')
//     const response = await fetch('http://localhost:5000/api/products/' + {id}, {
//         method: 'DELETE'
//     })
// }

class Item extends React.Component{
    constructor({department, name, size, corrosionfree, material, weight, id}){
        super({department, name, size, corrosionfree, material, weight, id});

        this.state = {
            department:department,
            name:name,
            size:size, 
            corrosionfree:corrosionfree, 
            material:material, 
            weight:weight,
            id:id,
            redirect:null
        }
    }

// componentDidMount(){
//     this.setState(
//         {
//             department:{department},
//             name:name,
//             size:size, 
//             corrosionfree:corrosionfree, 
//             material:material, 
//             weight:weight,
//             id:id
//         }

//     )
// }



deleteitem = async handleDelete => {
    // alert('You are deleting this item!')
    
    console.log(this.state.department)
    
    const response = await fetch('http://localhost:5000/api/products/' + this.state.id, {
        method: 'DELETE'
    })
}

// updateitem() {
//     const history = useHistory();
//     history.push("/updateitem")
// }


render(){
    if(this.state.redirect){
        // return <Redirect to="/updateitem" />
        return <Redirect to={{pathname: "/updateitem", state:{detail: this.state}}} />
    }
    return(
        
        <div className="img-div">       
        
        {/* <div className="span" onClick={props.OnClickX}>X</div>  */}
        <div className="span" onClick={this.deleteitem}>X</div> 
        <div className="update" onClick={()=> this.setState({redirect:true})}>U</div>
        {/* {<div className="span" onClick={handleDelete(props.id)}>X</div>  }
        <div className="span">X</div> */}
        <img className="image" src={this.state.department}/>

        <div>{this.state.name}</div>
        <div>{this.state.size}</div>
        <div>{this.state.corrosionfree}</div>
        <div>{this.state.material}</div>
        <div>{this.state.weight}</div>
    </div>


    )
}

}

export default Item;