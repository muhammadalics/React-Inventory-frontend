import React from 'react';
import { Redirect } from "react-router-dom";

import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';


class AddItem extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            material: '',
            weight: '',
            corrosion: '',
            size: '',
            url: '',
            redirect: false,
            errname: '',
            errnamecolor: 'red',
            errmaterial: '',
            errmaterialcolor: 'red',
            errweight: '',
            errweightcolor: 'red',
            disablebutton: false

        }

    }


handleSubmit = async event => {
    event.preventDefault();
    // this.setState({ email: '', password: '' });
    console.log('The entered values are:')
    console.log(this.state.name);
    console.log(this.state.material);
    console.log(this.state.weight);
    console.log(this.state.corrosion);
    console.log(this.state.size);
    console.log(this.state.url);

    let bodydata = {
        name: this.state.name,
        material: this.state.material,
        weight: this.state.weight,
        corrosionfree: 'true',
        size: this.state.size,
        department: this.state.url

    }

    console.log(JSON.stringify(bodydata))

    const response = await fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        // body: JSON.stringify(bodydata)
        body: JSON.stringify(bodydata)
    
    })

    if (!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    else{
        alert('Item has been added!')
        this.setState({redirect: true});
    }


    console.log(response)

};

handleChange = event => {
    const { value, name } = event.target;
    
    console.log(name + " " + value);
    
    this.setState({ [name]: value },this.inputValidator);
    console.log('After state change:');
    console.log(this.state.corrosion);
    console.log(this.state.size);
    

};

render(){
    if (this.state.redirect) {
        
        return <Redirect to={{ pathname: "/" }} />
    }
    return (
        <div>
        <h2>Add Items</h2>
        <form onSubmit={this.handleSubmit}>
            <FormInput name='name' label='Product Name' handleChange={this.handleChange}/>
            <FormInput name='material' label='Material' handleChange={this.handleChange}/>
            <FormInput name='weight' label='Weight' handleChange={this.handleChange}/>
            <FormSelect value={this.state.corrosionfree} name='corrosion' label='Corrosion Free' options={{ 'True': 'True', 'False': 'False' }} handleChange={this.handleChange} />
            <FormSelect name='size' label='Size' options={{ 'Small': 'Small', 'Medium': 'Medium', 'Large': 'Large' }} handleChange={this.handleChange}/>
            <FormInput name='url' label='Picture URL' handleChange={this.handleChange}/>
            <CustomButton type='submit'> Submit</CustomButton>

        </form>

    </div>

    )

}

}

export default AddItem;


