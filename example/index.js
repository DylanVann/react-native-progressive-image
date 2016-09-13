import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native'
import ProgressiveImage from 'react-native-progressive-image'

export default () =>
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
    />
    <ProgressiveImage
      thumbnailSource={{ uri: 'http://i.imgur.com/O249H4P.png?bust' + Math.random() }}
      imageSource={{ uri: 'http://i.imgur.com/741u15U.png?bust' + Math.random() }}
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
