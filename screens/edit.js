import React, { Component } from 'react';
import { StyleSheet, Text, Picker, View, Button, TextInput, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';





class EditProperties extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.route.params.property.title,
            type: this.props.route.params.property.type,
            address: this.props.route.params.property.address,
            rooms: this.props.route.params.property.rooms,
            price: this.props.route.params.property.price,
            area: this.props.route.params.property.area,
        }
    }

    createData = async () => {
        const {title, type, address, rooms, price, area, owner} = this.state
        if (title && type && address && rooms && price && area && owner) {
                try {
                    await fetch(`https://localhost/appgenda-api-slim/api/appointment/add`, {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json'
                            },
                        body: JSON.stringify({title, type, address, rooms, price, area, owner}),
                    })
                    navigation.navigate('List')
                } catch (error) {
                    console.error('Error:', error)
                }
        } else {
          Alert.alert(
            'Data Incomplete',
            `Please fill all fields to continue. Remember that red fields may cause an error in the future.`
          )
        }
      }
      

    render() {
        const {title, type, address, rooms, price, area, owner} = this.state
        console.log(this.state)
        return ( 
            <View style={styles.container}>
                <Text style={styles.title1}>Enter new property</Text>
                <TextInput style={styles.textInput} value={this.state.title}
                    onChangeText={text => this.setState({title: text})}
                    
                />
                
                 <Picker style={styles.textInput22}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                <Picker.Item label="Select type" value="select type" />
                <Picker.Item label="House" value="house" />
                <Picker.Item label="Room" value="room" />
                <Picker.Item label="Hostel" value="hostel" />
        </Picker>
    
                <TextInput style={styles.textInput} value={this.state.address}
                    onChangeText={text => this.setState({address: text})}
                    
                />
                <TextInput style={styles.textInput} value={this.state.rooms.toString()}
                    onChangeText={text => this.setState({rooms: text})}
                    
                />
                <TextInput style={styles.textInput} value={this.state.price.toString()}
                    onChangeText={text => this.setState({price: text})}
                    
                />
                <TextInput style={styles.textInput} value={this.state.area.toString()}
                    onChangeText={text => this.setState({area: text})}
                    
                />
				<View style={styles.buttons}>
					<TouchableHighlight onPress={this.createData}>
						<Text style={styles.button}>SAVE</Text>
					</TouchableHighlight>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('User')}>
						<Text style={styles.button}>CANCEL</Text>
					</TouchableHighlight>
				</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonTextStyle: {
        color: 'white',
        textAlign:'center',
        fontWeight: 'bold'
    },

       textInput: {
            marginTop: 10,
            borderColor: '#b0bec5',
            borderWidth: 2,
            borderRadius: 5,
            width: 300,
            textAlign: "center",
        fontWeight: 'bold',
        width: 300,
        height: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 6,

    },
    textInput22: {
        marginTop: 10,
        borderColor: '#b0bec5',
        borderWidth: 2,
        borderRadius: 5,
        width: 300,
    width: 300,
    height: 30,
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
        width : 250,
        height: 170,
        borderColor: '#ffab91',
        borderWidth: 5,
        borderRadius: 4,
        marginBottom: 5
    },
    text1:{
            backgroundColor: '#bf360c',
            padding: 5,
            marginVertical: 8,
            marginHorizontal: 16,
            textAlign:'center',
            color:'white',
            fontWeight: 'bold',
            borderRadius: 5
    },
    text2:{
        fontSize: 12,
        textTransform: "uppercase",
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    createListButton: {
        textAlign: 'center',
        fontWeight:'bold',
        backgroundColor: '#ff7043',
        marginTop:5,
        marginBottom:10,
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
    title1: {
        fontSize: 15,
        marginTop: 12,
        marginBottom: 10,
        height: 30,
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
      buttons: {
        width: '90%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
        },
      input: {
        height: 40,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 2,
        marginBottom: 20
      },
      title: {
        fontSize: 32,
            marginTop: 10
      },
    
    button:{
        marginTop: 10,
        fontSize: 12,
        backgroundColor: '#f4511e',
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        color: '#F5FCFF',
        textAlign: "center",
        fontWeight: 'bold',
        width: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 6,
    }
});

export default EditProperties;
