import React, { Component } from 'react'
import {Field,reduxForm} from 'redux-form'

class Streamform extends Component {
    renderErr({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput=({input,label,meta})=>{
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderErr(meta)}
            </div>
        )
    }
    onSubmit =(value)=>{
        this.props.onSubmit(value);
    }
    render() {
        return (
           
           <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form container error">
               <Field name="title" component={this.renderInput} label="enter title"/>
               <Field name="description" component={this.renderInput}  label="enter desc"/>
               <button className="ui button primary">Submit</button>
           </form>
        )
    }
}
const validate=(value)=>{
    const error={};
    if(!value.title){
        error.title='you must enter a title'
    }
    if(!value.description){
        error.description='you must enter a desc'
    }
    return error;
}

export default reduxForm({
    form:'streamForm',
    validate:validate
})(Streamform);

