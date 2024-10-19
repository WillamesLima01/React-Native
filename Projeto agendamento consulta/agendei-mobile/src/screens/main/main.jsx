import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import icon from "../../constants/icon.js";

import Abahome from "../abahome/abahome.jsx";
import abacalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

function Main() {

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Abahome} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={
                        {width:125, height: 29}
                    } />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.home} style={
                        { 
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }}/>

            <Tab.Screen name="Calendar" component={abacalendar} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={
                        {width:125, height: 29}
                    } />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar} style={
                        { 
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }}/>


            <Tab.Screen name="Profile" component={AbaProfile} options={{
                headerTitleAlign: "center",
                headerTitle: () => {
                    return <Image source={icon.logo} style={
                        {width:125, height: 29}
                    } />
                },
                tabBarShowLabel: false,
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile} style={
                        { 
                            width: 25,
                            height: 25,
                            opacity: focused ? 1 : 0.3
                        }
                    } />
                }
            }}/>

        </Tab.Navigator>
    </NavigationContainer>

}

export default Main;