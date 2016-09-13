import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'
import ProgressiveImage from 'react-native-progressive-image'

export default () =>
  <View style={styles.container}>
    <ProgressiveImage
      thumbnailSource={{ uri: 'http://www.eatornotapp.com/img/Home.min.png?bust' + Math.random() }}
      imageSource={{ uri: 'http://www.eatornotapp.com/img/Home.png?bust' + Math.random() }}
      style={{ flex: 1, alignItems: 'stretch' }}
    />
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  image: {
    flex: 1,
  }
})
