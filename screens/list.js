import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';



class PropertiesList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [
            {
                title: 'Propiedad uno',
                type: 'Tipo uno',
                address: 'Dirección uno',
                rooms: 2,
                price: 8000000,
                area: 400
            },
            {
                title: 'Propiedad dos',
                type: 'Tipo dos',
                address: 'Dirección dos',
                rooms: 2,
                price: 8000000,
                area: 400
            }
        ] }
    }

    componentDidMount = () => {
        //this.getProperties;
    } 

    getProperties = () => {
        fetch('urlDelaApiList')
        .then(response => response.json())
        .then(json => {
            //this.state.list = json.datos;
        }).catch(error => {
            alert('There has been a error loading the property list');
        })
    }

    

    render() { 
        return ( <View style={styles.container}>
        <TouchableHighlight style={styles.createListButton} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.buttonTextStyle}>Properties</Text>
        </TouchableHighlight>

            {this.state.list.map((property) => {return (
                
            <View>

                <Image
                    style={styles.logo}
                    source={require('../assets/host7.jpg')}
                />

                <View style={styles.box1}>
                <Text style={styles.text1}>{property.title}</Text>
                <Text style={styles.text2}>{property.type}</Text>
                <Text style={styles.text2}>{property.address}</Text>
                <Text style={styles.text2}>{property.rooms}</Text>
                <Text style={styles.text2}>{property.price}</Text>
                <Text style={styles.text2}>{property.area}</Text>
                
                </View>

            </View>

            
            )})}
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
    buttonTextStyle: {
        color: 'white',
        textAlign:'center',
        fontWeight: 'bold'
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
    box1:{
        borderColor: '#b0bec5',
        borderWidth: 5,
        borderRadius: 4,
        marginBottom: 5

    }
});
 
export default PropertiesList;