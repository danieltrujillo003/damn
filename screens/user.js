import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, ScrollView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { list: [] }
    }

    componentDidMount = () => {
        this.getProperties()
    }

    getProperties = () => {
        fetch(`http://localhost:3000/estates/get/all/${this.props.route.params.key}`)
            .then(response => response.json())
            .then(json => {
                this.setState({ list: json.res.data })
            }).catch(error => {
                Alert.alert('There has been a error loading the property list');
            })
    }

    handleDelete = async (id) => {
        Alert.alert(
            'Delete property',
            `Are you sure you want to delete the property?`,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "YES",
                    onPress: async () => {
                        try {
                            await fetch(`http://localhost:3000/estates/delete/${id}`, { method: 'DELETE' })
                            this.getProperties()
                        } catch (error) {
                            console.error('Error:', error)
                        }
                    }
                }
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.buttons}>
                        <Text style={styles.text3}>My properties</Text>
                    </View>
                    <TouchableHighlight style={styles.createListButton} onPress={() => this.props.navigation.navigate('Create', {key:this.props.route.params.key})}>
                            <Text style={styles.buttonTextStyle}>Create new</Text>
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
                                        <View style={styles.buttons}>
                                            <TouchableHighlight onPress={() => this.props.navigation.navigate('Edit', { property, key: this.props.route.params.key })}>
                                                <Text style={styles.button}>Edit</Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight onPress={() => this.handleDelete(property._id)}>
                                                <Text style={styles.button}>Delete</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
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

    text3:{
        color: '#000',
        textAlign:'center',
        fontWeight: 'bold'

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
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        alignItems: "center",
        width: 290,
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
        width: 250,
        borderWidth: 5,
        borderRadius: 4,
        marginBottom: 5
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
        fontSize: 14,
        marginTop: 6,
        marginBottom: 6,
        height: 18,
        width: 100,
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
    }
});

export default UserList;