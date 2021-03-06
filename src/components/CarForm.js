import React from 'react';
import { Field, reduxForm } from 'redux-form';


class CarForm extends React.Component {
    renderInput(formProps) {
        return(
            <div className="field">
               <label>{formProps.label}</label>
               <input {...formProps.input}/> {/* ///takes formProps input properties and adds them to input element
                                               ///ie. formProps.input.onChange and formProps.input.value */}
               {formProps.meta.error && formProps.meta.touched ? <div style={{color:'red'}}>{formProps.meta.error}</div>:<div></div>}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="firstName" component={this.renderInput} label="Enter First Name"/>
                <Field name="lastName" component={this.renderInput} label="Enter Last Name"/>
                <button className="ui button primary">Submit</button>
            </form>
            
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.firstName) {
      errors.firstName = 'You must enter your first name';
    }
    if(!formValues.lastName) {
      errors.lastName = 'You must enter you last name';
    }
    return errors;
}

export default reduxForm({
    form: 'carForm',
    validate: validate
})(CarForm);