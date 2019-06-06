import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchStreams} from '../../actions/Index';
import {Link,withRouter} from 'react-router-dom';



class Streamlist extends Component {
    state={
        val:true
    }
    componentDidMount(){
        this.props.fetchStreams();
    }
    renderList(){
        return this.props.streams.map(stream=>{
            return(
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                      <h3 style={{float:'left'}}>Title : <Link to={`/streams/${stream.id}`} className="header">{stream.title}</Link>  </h3>
                      </div>
                        <div className="description">
                       <h3 style={{float:'left'}}>Description :{stream.description}</h3>
                        </div>
                        {stream.userID===this.props.user.userID?
                             <div className="right floated content">
                                <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>                                
                                <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                            </div>
                        :null }

                    
                </div>
            )
        })
    }
    renderCreate(){
       return ( this.props.user.isSignedIn?
        <div style={{textAlign:"right"}}>
            <Link to="streams/new" className="ui button primary">Create Stream</Link>
        </div>
        :null)
    }
    render() {
      
        return (
            
            <div >
             <h2 className="fake">   Streams</h2> 
             <div className="ui celled list">{this.renderList()}</div>
             {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        streams:Object.values(state.streams),
        user:state.auth
    }
}
export default withRouter(connect(mapStateToProps,{fetchStreams})(Streamlist));