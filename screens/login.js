import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput } from 'react-native';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
    }

    onChangeEmail = email => {
        this.setState({email});
    }

    onChangePassword = password => {
        this.setState({password});
    }

    onSubmit = async () => {
        const email = this.state.email;
        const password = this.state.password;
        this.login(email, password);
    }

    login = (email, password) => {
        //console.log('Tratando de iniciar sesión');
        fetch('loginUrl', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(response => response.json())
        .then(json => {
            //logica para navegar a la otra vista.
        })
        .catch(error => {
            alert('Invalid username or password')
        });
    }

    render() { 
        return ( <View style={styles.container}>
            <View style={styles.header}>
           <Image style={styles.logo} source={require('../assets/logo.png')}/>
           </View>
           <View>
           <TextInput maxLength={5} style={styles.textInput} placeholder="Username" onChangeText={(text)=>setName(text)}/>
           
           <TextInput maxLength={5} style={styles.textInput} placeholder="Password" onChangeText={(text)=>setName(text)}/>
            </View>
            <View style={styles.main}>
            
        <TouchableHighlight style={''} onPress={() => this.props.navigation.navigate('User')}>
        <Text style={styles.text}>Find your place!</Text>
        </TouchableHighlight>
        <TouchableHighlight style={''} onPress={() => this.props.navigation.navigate('List')}>
        <Text style={styles.text}>Enter as a guest</Text>
        </TouchableHighlight>
      </View>
        </View> );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      alignItems: 'center',
      marginBottom: 20
    },
  textInput: {
    marginTop: 10,
    borderColor: '#b0bec5',
    borderWidth: 2,
    borderRadius: 5,
    height:30,
    width: 300,
    textAlign: 'center'
  },
  text: {
    fontSize: 15,
    marginTop: 12,
    width: 300,
    textAlign: 'center',
    color: '#f4511e',
    fontWeight: 'bold',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,

  },
    logo: {
      width: 300,
      height: 300,
      borderColor: '#ffab91',
      borderWidth: 5,
      borderRadius: 4,
      marginBottom: 2
    },
    title: {
      fontSize: 40,
      textTransform: "uppercase",
      color: 'teal',
      fontWeight: 'bold',
    },
    button: {
      marginTop: 10,
      backgroundColor: '#f4511e',
      paddingBottom: 10,
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
      borderRadius: 10,
      color: '#F5FCFF',
      textAlign: "center",
      fontWeight: 'bold',
      width: 300,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 6,
  },
  buttonTextStyle: {
      color: '#F5FCFF'
  },
    main: {}
  });
  
export default Login;