
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import Movies from "./Pages/Movies";
import Favorites from "./Pages/Favorites";
import NativeForm from "./Pages/NativeForm"
import TodoList from "./Pages/TodoList"
import MoviesDetails from "./Pages/MoviesDetails";

import { Provider } from "react-redux";
import store from "./Pages/MyStore";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MainStack() {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoviesList" component={Movies} />
      <Stack.Screen name="MovieDetails" component={MoviesDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer style={styles.container}>
        <Drawer.Navigator>
          <Drawer.Screen name="Movies" component={MainStack} />
          <Drawer.Screen name="Favorites" component={Favorites} />
          <Drawer.Screen name="Native Form" component={NativeForm} />
          <Drawer.Screen name="Todo List" component={TodoList} />      
        </Drawer.Navigator>
      </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3C467B",
    padding: 10,
  },
});
