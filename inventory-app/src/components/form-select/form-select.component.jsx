
import React from 'react';

class FormSelect extends React.Component {

    constructor({handleChange, label, name, options, ...otherProps}) {
        super({handleChange, label, name, options, ...otherProps});
        console.log(options);

        //     const optionslist = [];
        //     for (const prop in options) {
        //         console.log(prop)
        //         console.log(options[prop])
        //         optionslist.push(<option value={options[prop]}>{prop}</option>)
        //     console.log(optionslist);
        // }


        this.state = {
            options: options,
            label: label,
            handleChange: handleChange,
            name: name
        }

    }


    optionmaker() {
        const optionslist = [];
        for (const prop in this.state.options) {
            optionslist.push(<option value={this.state.options[prop]}>{prop}</option>)
        };
        return optionslist;
    }




    render() {


        return (

            <div className="group">
                <label>{this.state.label}</label>
                <select className='forminput' name={this.state.name} onChange={this.state.handleChange} {...this.otherProps}>
                    <option value=""></option>
                    {this.optionmaker()}
                    
                </select>

            </div>



        )

    }

}

export default FormSelect;

