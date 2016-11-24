# react-native-progressive-image
Progressively load images. Loads a small thumbnail first. Includes fade and blur effects.

![react-native-progressive-image demo](http://i.imgur.com/Ww5qqKz.gif)

Based on [Sharath Prabhal's blog post](https://medium.com/the-react-native-log/progressive-image-loading-in-react-native-ecc88e724343#.e5pm41efa).

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

## Properties

| Prop | Description | Default |
|---|---|---|
| **`imageSource`** | Image source (e.g. { uri: 'https://facebook.github.io/react/img/logo_og.png' }). | None |
| **`thumbnailSource`** | Should be a low resolution version of the image used in `imageSource`. | None |
| **`thumbnailBlurRadius`** | Blur radius for the low resolution thumbnail (iOS only). | `5` |
| **`style`** | Make sure to include width and height, or use flex. | None |
| **`imageFadeDuration`** | Fade-in duration for the image in ms. | `250` |
| **`thumbnailFadeDuration`** | Fade-in duration for the thumbnail in ms. | `250` |
| **`onLoadThumbnail`** | Callback function that gets called when the thumbnail is loaded. | `noop` |
| **`onLoadImage`** | Callback function that gets called when the main image is loaded. | `noop` |
