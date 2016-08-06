import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import firebase from 'firebase';

export default class SignIn extends Component {
  componentWillMount() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      console.log(token)
      // The signed-in user info.
      var user = result
      console.log(user)
      // ...
    })

    function getFriends() {
        FB.api('/me/friends', function(response) {
            if(response.data) {
                $.each(response.data,function(index,friend) {
                    alert(friend.name + ' has id:' + friend.id);
                });
            } else {
                alert("Error!");
            }
        });
    }
  }



  render() {
    return (
    <div>
    </div>
    );
  }
}

