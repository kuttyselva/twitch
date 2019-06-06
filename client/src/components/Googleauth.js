import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions/Index'
class Googleauth extends React.Component{
    

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'251364656321-4p5ete9p3enmvcl5qvm27n4ud5mvseef.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthchange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthchange);
            })
        }); 
        
    }
    onAuthchange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }    
};
    onSignin=()=>{
        this.auth.signIn();
        console.log('signed in');
    };
    onSignout=()=>{
        this.auth.signOut();
        console.log('signed out ');
    };
    renderAuthButton(){ 
        if(this.props.auth.isSignedIn ===null){
            return <div></div>
        }
        else if(this.props.auth.isSignedIn){
            return( <button className="ui red google button" onClick={this.onSignout}>
            <i className="google icon"/>
                Signout
          
            </button> )
        }
        else{
            return( <button className="ui red google button"  onClick={this.onSignin}>
            <i className="google icon"/>
                Signin
            
            </button> )
        }
    }
    render(){
        const {auth}=this.props;
        console.log(auth.userID);
        return (
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{signIn,signOut})(Googleauth);