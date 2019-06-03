import React from 'react';
import { Field, reduxForm } from 'redux-form';


class FormField extends React.Component {
    renderInput(formProps) {
        console.log(formProps);
        return(
            <div className="field">
               <label>{formProps.label}</label>
               <input {...formProps.input}/> {/* ///takes formProps input properties and adds them to input element
                                               ///ie. formProps.input.onChange and formProps.input.value */}
            </div>
        )
    }

    render() {
        console.log(this.props);
        return (
            <form className="ui form">
                <Field name="firstName" component={this.renderInput} label="Enter First Name"/>
                <Field name="lastName" component={this.renderInput} label="Enter Last Name"/>
            </form>
            
        )
    }
}

export default reduxForm({
    form: 'customerName'
})(FormField);