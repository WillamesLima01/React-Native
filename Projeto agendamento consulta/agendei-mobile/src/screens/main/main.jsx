import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Abahome from "../abahome/abahome.jsx";
import abacalendar from "../abacalendar/abacalendar.jsx";
import AbaProfile from "../abaprofile/abaprofile.jsx";

const Tab = createBottomTabNavigator();

function Main() {

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Abahome} />
            <Tab.Screen name="Calendar" component={abacalendar} />
            <Tab.Screen name="Profile" component={AbaProfile} />
        </Tab.Navigator>
    </NavigationContainer>

}

export default Main;