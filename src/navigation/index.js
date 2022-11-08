import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import VDcontato from "../screens/contato";

import { VDhome } from "../screens/home";
import { VDnoticias } from "../screens/noticias";
import { VDprodutos } from "../screens/produtos";
import { VDsobre } from "../screens/sobre";






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
        name="home"
        component={VDhome}
       options={{
         tabBarLabel: 'Home',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="contato"
        component={VDcontato}
       options={{
         tabBarLabel: 'Contato',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="contacts" color={color} size={26} />
         ),
       }}
      />
       <Stack.Screen
        name="sobre"
        component={VDsobre}
       options={{
         tabBarLabel: 'Sobre',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="apple" color={color} size={26} />
         ),
       }}
      />
       <Stack.Screen
        name="produtos"
        component={VDprodutos}
       options={{
         tabBarLabel: 'Produtos',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="store" color={color} size={26} />
         ),
       }}
      />
      <Stack.Screen
        name="noticias"
        component={VDnoticias}
       options={{
         tabBarLabel: 'Noticias',
         tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="newspaper" color={color} size={26} />
         ),
       }}
      />

    </Stack.Navigator>
  )
}