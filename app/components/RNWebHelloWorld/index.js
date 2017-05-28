/**
*
* RNWebHelloWorld
*
*/

const React = require('react');
const {
  // apis
  Animated,
  AppState,
  AsyncStorage,
  Clipboard,
  Dimensions,
  I18nManager,
  NetInfo,
  PanResponder,
  PixelRatio,
  StyleSheet,
  // components
  ActivityIndicator,
  Button,
  Image,
  ProgressBar,
  ScollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View
} = require('react-native-web');

module.exports = class Placeholder extends React.Component {
  render() {
    const {style} = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text>React Native for Web</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

