import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/home";



import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





// Simboliza a instância do Stack
const Stack = createMaterialBottomTabNavigator();

// Componente base
export const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      activeColor="#000000"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: '#ff00ff' }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
         ),
       }}
      />
     
     
     
      

    </Stack.Navigator>
  )
}