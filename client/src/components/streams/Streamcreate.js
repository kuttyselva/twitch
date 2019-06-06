import React, { Component } from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createStream} from '../../actions/Index'
import Streamform from './Streamform'
class Streamcreate extends Component {
   
    onSubmit =(value)=>{
        this.props.createStream(value);
    }
    render() {
        return (
         <div>
             <h3>Create Stream</h3>
             <Streamform onSubmit={this.onSubmit}/>
         </div>  
         
        )
    }
}



export default withRouter(connect(null,{createStream})(Streamcreate));