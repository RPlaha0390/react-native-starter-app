/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import AppNavigator from './AppNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



interface Props {}

interface State {
  possibleFriends: string[],
  currentFriends: string[]
}

export interface ScreenProps {
  possibleFriends: string[],
  currentFriends: string[]
  addFriend: () => void
}

export default class App extends Component<Props, State, ScreenProps> {
  constructor(props: Props) {
    super(props)
    this.state = {
      possibleFriends: [
        'Shivani',
        'Karan',
        'Raman',
      ],
      currentFriends: [],
    }
  }

  addFriend = (index: number) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // And put friend in currentFriends
    currentFriends.push(addedFriend[0])

    // Finally, update our app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator
          screenProps={ {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
          } }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});