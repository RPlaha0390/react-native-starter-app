import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation'
import { ScreenProps } from './App';

interface Props extends NavigationInjectedProps {
	screenProps: ScreenProps
}
export default class Friends extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
          {this.props.screenProps.possibleFriends.map((friend, _index) => (
              <Button
                key={friend}
                title={`Add ${ friend }`}
                onPress={() =>
                  this.props.screenProps.addFriend()
                }
              />
          ))}
        <Button
					title="Back to home"
					onPress={() =>
							this.props.navigation.navigate('Home')
					}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});