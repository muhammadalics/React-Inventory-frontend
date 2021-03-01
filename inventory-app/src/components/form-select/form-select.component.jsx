
// import React from 'react';

// import './form-select.styles.css'

// class FormSelect extends React.Component {

//     constructor({handleChange, label, name, options, value, ...otherProps}) {
//         super({handleChange, label, name, options, value, ...otherProps});
//         console.log(options);



//         //     const optionslist = [];
//         //     for (const prop in options) {
//         //         console.log(prop)
//         //         console.log(options[prop])
//         //         optionslist.push(<option value={options[prop]}>{prop}</option>)
//         //     console.log(optionslist);
//         // }


//         this.state = {
//             options: options,
//             label: label,
//             handleChange: handleChange,
//             name: name,
//             value: value
//         }

//     }


//     optionmaker() {
//         const optionslist = [];
//         for (const prop in this.state.options) {
//             optionslist.push(<option value={this.state.options[prop]}>{prop}</option>)
//         };
//         return optionslist;
//     }




//     render() {
//         console.log('Select Value:')
//         console.log(this.state.value);

//         return (

//             <div className="group">
//                 {/* <div><label>{this.state.label}</label></div> */}
//                 <div className="label">{this.state.label}</div>
//                 <select defaultValue={this.state.value} className='formselect' name={this.state.name} onChange={this.state.handleChange} {...this.otherProps}>
                
//                     {/* <option value=""></option> */}
//                     {this.optionmaker()}                   
//                 </select>

//             </div>



//         )

//     }

// }

// export default FormSelect;









import React from 'react';

import './form-select.styles.css'

class FormSelect extends React.Component {

    constructor(props) {
        super(props);
        console.log('This is from form-select')
        console.log(this.props.value);
        console.log(typeof(this.props.value));

        //     const optionslist = [];
        //     for (const prop in options) {
        //         console.log(prop)
        //         console.log(options[prop])
        //         optionslist.push(<option value={options[prop]}>{prop}</option>)
        //     console.log(optionslist);
        // }


        this.state = {
            options: this.props.options,
            label: this.props.label,
            // handleChange: this.props.handleChange,
            name: this.props.name,
            value: this.props.value
        }

    }


    optionmaker=() => {
        const optionslist = [];
        for (const prop in this.state.options) {
            optionslist.push(<option value={this.state.options[prop]}>{prop}</option>)
        };
        return optionslist;
    }

    handleChangehere = event=>{
        // this.setState({value: event.target.value});
        this.props.handleChange(event);
    }

    // this is needed to compare previous props with the updated ones. re-rendering may not happen without using componentDidUpdate
    componentDidUpdate(prevProps){
        if (this.props.value !== prevProps.value){
            console.log('componenet did mount!')
            this.setState({value:this.props.value})
        }
    }


    render() {
        console.log('From inside form-select render.')
        console.log(this.state.value)
        console.log('From props:')
        console.log(this.state.value)

        return (

            <div className="group">
                {/* <div><label>{this.state.label}</label></div> */}
                <div className="label">{this.state.label}</div>
                <select value={this.state.value} className='formselect' name={this.state.name} onChange={this.handleChangehere} {...this.otherProps}>
                               
                
                {/* <select value={this.state.value} className='formselect' name={this.state.name} onChange={this.handleChangehere} {...this.otherProps}> */}
                
                    {/* <option value=""></option> */}
                    {this.optionmaker()}                   
                </select>

            </div>



        )

    }

}

export default FormSelect;

