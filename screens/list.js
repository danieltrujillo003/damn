import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

class PropertiesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            sort: ''
        }
    }

    componentDidMount = () => {
        this.getProperties()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.sort !== prevState.sort) {
            this.getProperties()
        }
    }

    getProperties = () => {
        fetch(`http://localhost:3000/estates/get/all?sort=${this.state.sort}`)
        .then(response => response.json())
        .then(json => {
            this.setState({ list: json.res.data })
        }).catch(error => {
            alert('There has been a error loading the property list');
        })
    }

    toggleFilter = () => {
        const { sort } = this.state
        if (sort === 'asc') {
            this.setState({ sort: 'desc' })
        } else {
            this.setState({ sort: 'asc' })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.createListButton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonTextStyle}>Properties</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.createListButton} onPress={() => this.toggleFilter()}>
                    <Text style={styles.buttonTextStyle}>Filter</Text>
                </TouchableHighlight>

                {
                    this.state.list.map((property, i) => {
                        return (
                            <View key={i}>
                                <Image
                                    style={styles.logo}
                                    source={require(`../assets/host${Math.ceil(Math.random()*7)}.jpg`)}
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
                        )
                    })
                }
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
        backgroundColor: '#ff7043',
        marginTop:5,
        marginBottom:10,
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
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