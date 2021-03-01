import React from 'react';
import { Redirect } from "react-router-dom";

import FormInput from '../../components/form-input/form-input.component';
import FormSelect from '../../components/form-select/form-select.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './update-item.styles.css';

class UpdateItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.location.state.detail.name,
            material: this.props.location.state.detail.material,
            weight: this.props.location.state.detail.weight,
            corrosion: (this.props.location.state.detail.corrosionfree == true) ? 'True' : 'False' ,
            size: this.props.location.state.detail.size,
            url: this.props.location.state.detail.department,
            id: this.props.location.state.detail.id,
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
            corrosionfree: (this.state.corrosion == 'True'),
            size: this.state.size,
            department: this.state.url,
            id: this.state.id,


        }

        console.log(JSON.stringify(bodydata))

        const response = await fetch('http://localhost:5000/api/products', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(bodydata)

        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        else {
            console.log('update successful.')
            alert('Item has been updated!')
            this.setState({ redirect: true })
        }

        console.log(response)

    };

    handleChange = async event => {
        console.log('Print event:');
        console.log(event);
        const { value, name } = event.target;

        console.log(name + " " + value);

        // if (name !== 'corrosion' && name !== 'size') {
        //     console.log('name is not corrosion or size')
        //     // await this.setState({ [name]: value }, this.inputValidator);
        //     this.setState({ [name]: value });
        // }
        // else {
        //     // await this.setState({ [name]: value });
        //     this.setState({ [name]: value });
        // }
        // console.log('After state change:');
        // console.log(this.state.corrosion);
        // console.log(this.state.size);
        await this.setState({ [name]: value }, this.inputValidator);
        

    };
    // async inputValidator {
    inputValidator = async () => {
        if (this.state.name.length < 4 | this.state.name.length > 20) {
            this.setState({ errname: 'Name should be between 4 and 20 characters long.' })
            await this.setState({ errnamecolor: 'red' })
            // this.setState({disablebutton: true})
        }
        else {
            this.setState({ errname: 'OK' })
            await this.setState({ errnamecolor: 'green' })
            // this.setState({disablebutton: false})
        }

        if (this.state.material.length < 4 | this.state.material.length > 20) {
            this.setState({ errmaterial: 'Material should be between 4 and 20 characters long.' })
            await this.setState({ errmaterialcolor: 'red' })
            // this.setState({disablebutton: true})
        }
        else {
            this.setState({ errmaterial: 'OK' })
            await this.setState({ errmaterialcolor: 'green' })
            // this.setState({disablebutton: false})
        }

        let specialchar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
        let alpha = /[a-zA-Z]/;

        if (specialchar.test(this.state.weight) | alpha.test(this.state.weight)) {
            this.setState({ errweight: 'Special characters and alphabets are not allowed.' })
            await this.setState({ errweightcolor: 'red' })
            // this.setState({disablebutton: true})          
        }
        else if (this.state.weight.length < 1 | this.state.weight.length > 10) {
            this.setState({ errweight: 'Weight should not be empty or longer than 10 characters.' })
            await this.setState({ errweightcolor: 'red' })
            // this.setState({disablebutton: true})
        }
        else {
            this.setState({ errweight: 'OK' })
            await this.setState({ errweightcolor: 'green' })
            // this.setState({disablebutton: false})
        }

        // if (this.state.errnamecolor === 'red' | this.state.errmaterialcolor === 'red' | this.state.errweightcolor === 'red') {
        //     this.setState({ disablebutton: true });
        // }
        this.shouldDisableButton();
    }
    // shouldDisableButton(){
    shouldDisableButton = () => {
        console.log('Printing colors');
        console.log(this.state.errnamecolor);
        console.log(this.state.errmaterialcolor);
        console.log(this.state.errweightcolor);
        if (this.state.errnamecolor == 'red' || this.state.errmaterialcolor == 'red' || this.state.errweightcolor == 'red') {
            console.log('firing color')
            this.setState({ disablebutton: true });
        }
        else {
            this.setState({ disablebutton: false });
        }
    }

    // componentDidMount(){
    //     this.setState({corrosion: this.props.location.state.detail.corrosionfree});
    //     this.setState({size: this.props.location.state.detail.size});
    // }
        

    

    render() {
        console.log('rendering')
        // console.log(this.props.location.state.detail)
        if (this.state.redirect) {
            return <Redirect to={{ pathname: "/" }} />
        }
        // console.log(this.state);
        // console.log(this.state.disablebutton);

        console.log('The state of size inside render is:');
        console.log(this.state.size);

        return (
            <div>
                <h2>Update Items</h2>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <span className="ID">ID: {this.state.id}</span>
                    <p></p>
                    <br></br>
                    <br></br>

                    <FormInput value={this.state.name} name='name' label='Product Name' handleChange={this.handleChange} errmsg={this.state.errname} errcolor={this.state.errnamecolor} />
                    <FormInput value={this.state.material} name='material' label='Material' handleChange={this.handleChange} errmsg={this.state.errmaterial} errcolor={this.state.errmaterialcolor} />
                    <FormInput value={this.state.weight} name='weight' label='Weight' handleChange={this.handleChange} errmsg={this.state.errweight} errcolor={this.state.errweightcolor} />
                    <FormSelect value={this.state.corrosion} name='corrosion' label='Corrosion Free' options={{ 'True': 'True', 'False': 'False' }} handleChange={this.handleChange} />
                    <FormSelect value={this.state.size} name='size' label='Size' options={{ 'Small': 'Small', 'Medium': 'Medium', 'Large': 'Large' }} handleChange={this.handleChange} />
                    <FormInput value={this.state.url} name='url' label='Picture URL' handleChange={this.handleChange} />
                    <CustomButton status={this.state.disablebutton} type='submit'>Push Update</CustomButton>

                </form>

            </div>

        )

    }

}

export default UpdateItem;


