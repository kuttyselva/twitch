import React, { Component } from 'react'
import {deleteStream,fetchStream} from '../../actions/Index'
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history'
class Streamdelete extends Component {
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);

  }
 
      tag(){
          console.log(this.props)
        return `are you sure you want to delete the stream "${this.props.stream.title}" ?`
    }
    render() {
        if(!this.props.stream){
            return <div>loading ...</div>
        }
        const actions=(
           <React.Fragment>
                <button className="ui button negative" onClick={()=>this.props.deleteStream(this.props.match.params.id)} >Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
        
        return (
           
                <Modal title="Delete Stream" onDismiss={()=>history.push('/')} actions={actions} content={this.tag()}  />
           
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return{
        stream:state.streams[ownProps.match.params.id]
    }
}
export default withRouter(connect(mapStateToProps,{fetchStream,deleteStream})(Streamdelete));

