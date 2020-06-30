import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, TextInput, Alert } from 'react-native';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            key: ''
        }
    }

    onSubmit = () => {
        const email = this.state.email;
        const password = this.state.password;
        this.login(email, password);
    }

    login = (email, password) => {
        fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(json => {
                this.setState({key:json.res.data.key})
                this.props.navigation.navigate('Login')
                Alert.alert('Account created, please log in')
            })
            .catch(error => {
                Alert.alert('Invalid register')
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TextInput style={styles.textInput} placeholder="Name" />
                    <TextInput style={styles.textInput} placeholder="Lastname" />
                    <TextInput style={styles.textInput} placeholder="Email" onChangeText={(text)=>this.setState({email:text})}/>
                    <TextInput style={styles.textInput} placeholder="Password" onChangeText={(text)=>this.setState({password:text})}/>
                </View>
                <View style={styles.buttons}>
                    <TouchableHighlight style={''} onPress={() => this.onSubmit()}>
                        <Text style={styles.text}>Register!</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={''} onPress={() => this.props.navigation.navigate('List')}>
                        <Text style={styles.text}>Enter without sign in</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
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
      input: {
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 20
      },
      input: {
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 20
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
    buttons: {}
});

export default Register;