import {createBottomNavigator} from "react-navigation/bottom-tabs";
import React from "react";
import TabNavigator from "/TabNavigator"
import Profile from '.Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    componentDIdMount(){
        let theme;
        firebase
            .database()
            .ref("/users/" + firebase.auth().currentUser.uid)
            .on("value", function (snapshot) {
                theme = snapshot.val().current_theme;
            });
        this.setState({light_theme: theme === "light" ? true : false});
            
    }

    render() {
        let props = this.props;
    return (
        <Drawer.Navigator
            drawerContentOption={{
                activeTintColor: "#e91e63",
                inactiveTintColor: this.state.light_theme ? "black" : "white",
                itemStyle: {marginVertical: 5}
            }}
            drawerContent={props => <CustomSidebarMenu {...props} />}
        >
            <Drawer.Screen 
                name="Home"
                component={StackNavigator}
                options={{unmountOnBLur: true}}
            />

            <Drawer.Screen 
                name="Profile"
                component={Profile}
                options={{unmountOnBLur: true}}
            />

            <Drawer.Screen 
                name="Logout"
                component={Logout}
                options={{ummountOnBlur: true}}
            />
        </Drawer.Navigator>
    )
}
}

export default DrawerNavigator
