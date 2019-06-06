import React, { Component } from 'react';
import {editStream,fetchStream} from '../../actions/Index'
import {connect} from 'react-redux';
import Streamform from './Streamform';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
class Streamedit extends Component {
    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);
      
    }
    onSubmit=(values)=>{
this.props.editStream(this.props.match.params.id,values)
    }
    render() {
        return (
            <div>
                {this.props.stream?
                    <div>
                        <h3> Edit Stream</h3>
                        <Streamform initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>

                    </div>: <div>no</div> }
               
            </div>
        )
    } 
}
const mapStateToProps=(state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default withRouter(connect(mapStateToProps,{fetchStream,editStream})(Streamedit));
