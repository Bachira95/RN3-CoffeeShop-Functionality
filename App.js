import React, { Component } from "react";
import { Spinner, Container } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./redux";

// Components
import RootNavigator from "./Navigation";

//Flash Message
import FlashMessage from "react-native-flash-message";

export default class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="#132D4B" />;
    }
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Container>
            <RootNavigator />
            <FlashMessage position="center" />
          </Container>
        </NavigationContainer>
      </Provider>
    );
  }
}
