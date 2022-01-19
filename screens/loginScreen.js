import React, {Component} from 'react';
import {Text,View} from 'react-native';

export default class LoginScreen extends Component {

    signInWithGoogleAsync = async () => {
        try {
            const result = await Google.logInAsync({
                behaviour: "web",
                androidClientId:
                  "72696421845-lqe44rrjuiggsegp1uv4gklv34tvl3gc.apps.googleusercontent.com",
                iosClientId:
                  "72696421845-osrvc36bjie4264j4c0812sp5a2egqhj.apps.googleusercontent.com",
                scopes: ["profile", "email"]
              });
        };
    };
     render(){
       if (!this,state.fontsLoaded){
         return<AppLoading />
       } else {
        return (
          <View 
            style={{
                flex:1,
                justifyContent: "center",
                alignItems:"center"
            }}>
              <Button title="sign in with Google"
                      onPress={() => this.signInWithGoogleAsync()}></Button>
            </View>
        )}
             }
}