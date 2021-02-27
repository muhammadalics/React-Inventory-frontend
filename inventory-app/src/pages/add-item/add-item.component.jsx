import React from 'react';

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
            url: ''
        }

    }


handleSubmit = event => {
    event.preventDefault();
    // this.setState({ email: '', password: '' });
    console.log('The entered values are:')
    console.log(this.state.name);
    console.log(this.state.material);
    console.log(this.state.weight);
    console.log(this.state.corrosion);
    console.log(this.state.size);
    console.log(this.state.url);

};

handleChange = event => {
    const { value, name } = event.target;
    
    console.log(name + " " + value);
    
    this.setState({ [name]: value });
    console.log('After state change:');
    console.log(this.state.corrosion);
    console.log(this.state.size);
    

};

render(){
    return (
        <div>
        <h1>Add Items</h1>
        <form onSubmit={this.handleSubmit}>
            <FormInput name='name' label='Product Name' handleChange={this.handleChange}/>
            <FormInput name='material' label='Material' handleChange={this.handleChange}/>
            <FormInput name='weight' label='Weight' handleChange={this.handleChange}/>
            <FormSelect value={this.state.corrosion} name='corrosion' label='Corrosion Free' options={{ 'True': 'True', 'False': 'False' }} handleChange={this.handleChange} />
            <FormSelect name='size' label='size' options={{ 'Small': 'Small', 'Medium': 'Medium', 'Large': 'Large' }} handleChange={this.handleChange}/>
            <FormInput name='url' label='Picture URL' handleChange={this.handleChange}/>
            <CustomButton type='submit'> Submit</CustomButton>

        </form>

    </div>

    )

}

}

export default AddItem;


