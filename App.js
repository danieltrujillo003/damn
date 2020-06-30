import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import PropertiesList from './screens/list';
import CreateProperties from './screens/create';
import UserList from './screens/user';
import EditProperties from './screens/edit';
import Register from './screens/register';

const Stack = createStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Register" component={Register}/>
          <Stack.Screen name="List" component={PropertiesList}/>
          <Stack.Screen name="Create" component={CreateProperties}/>
          <Stack.Screen name="User" component={UserList}/>
          <Stack.Screen name="Edit" component={EditProperties}/>
        </Stack.Navigator>
    </NavigationContainer>
   );
}


export default App;
