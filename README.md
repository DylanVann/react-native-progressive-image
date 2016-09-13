# react-native-progressive-image
Progressively load images. Loads a small thumbnail first. Includes fade and blur effects.

![react-native-progressive-image demo](http://i.imgur.com/Ww5qqKz.gif)

## Installation

`npm i -S react-native-progressive-image`

## Usage

```javascript
import ProgressiveImage from 'react-native-progressive-image'

const TheProgressiveImage = () =>
  <ProgressiveImage
    thumbnailSource={{ uri: 'http://i.imgur.com/O249H4P.png?bust' + Math.random() }}
    imageSource={{ uri: 'http://i.imgur.com/741u15U.png?bust' + Math.random() }}
    style={{ flex: 1, alignItems: 'stretch' }}
  />
```
