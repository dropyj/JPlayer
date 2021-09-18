# JPlayer – .ts Video Player in JavaScript for Vue project in mobile

JPlayer is a Video Player written in JavaScript. 

# Developer

Author:Score yj



# Install
```
npm set registry https://registry-npm.gz4399.com/
npm install j-player
```
# Import In main.js
```js
import JPlayer from "j-player"
Vue.use(JPlayer)
```
# Usage in vue template
```js
<jplayer :url='url' :width='width' :height='height' :options='options' @init='init' @loaded='loaded'></jplayer>
```

The `url` argument accepts a URL to an MPEG .ts file or a WebSocket server (ws://...).

The `width` and `height` argument accepts the canvas width and height such as '100%' or '100px' or '100vw' and so on.


The `options` argument supports the following properties:

- `loop` – whether to loop the video (static files only). Default `true`.
- `autoplay` - whether to start playing immediately (static files only). Default `false`.
- `audio` - whether to decode audio. Default `true`.
- `video` - whether to decode video. Default `true`.
- `poster` – URL to an image to use as the poster to show before the video plays.
- `pauseWhenHidden` – whether to pause playback when the tab is inactive. Default `true`. Note that browsers usually throttle JS in inactive tabs anyway.
- `disableGl` - whether to disable WebGL and always use the Canvas2D renderer. Default `false`.
- `disableWebAssembly` - whether to disable WebAssembly and always use JavaScript decoders. Default `false`.
- `preserveDrawingBuffer` – whether the WebGL context is created with `preserveDrawingBuffer` - necessary for "screenshots" via `canvas.toDataURL()`. Default `false`.
- `progressive` - whether to load data in chunks (static files only). When enabled, playback can begin before the whole source has been completely loaded. Default `true`.
- `throttled` - when using `progressive`, whether to defer loading chunks when they're not needed for playback yet. Default `true`.
- `chunkSize` - when using `progressive`, the chunk size in bytes to load at a time. Default `1024*1024` (1mb).
- `decodeFirstFrame` - whether to decode and display the first frame of the video. Useful to set up the Canvas size and use the frame as the "poster" image. This has no effect when using `autoplay` or streaming sources. Default `true`.
- `maxAudioLag` – when streaming, the maximum enqueued audio length in seconds.
- `videoBufferSize` – when streaming, size in bytes for the video decode buffer. Default 512*1024 (512kb). You may have to increase this for very high bitrates.
- `audioBufferSize` – when streaming, size in bytes for the audio decode buffer. Default 128*1024 (128kb). You may have to increase this for very high bitrates.

The event of the jplayer element:

- `@init` - init the player by your options and will return the player instance you can use.
- `@loaded` - when the source is been loaded and can be played.
- `@ended` - when the video is ended,it will call back this envent.

## JPlayer API

- `.play()` – start playback
- `.pause()` – pause playback
- `.stop()` – stop playback and seek to the beginning
- `.nextFrame()` – advance playback by one video frame. This does not decode audio. Returns `true` on success, `false` when there's not enough data.
- `.destroy()` – stops playback, disconnects the source and cleans up WebGL and WebAudio state. The player can not be used afterwards.
- `.volume` – get or set the audio volume (0-1)
- `.currentTime` – get or set the current playback position in seconds
- `.paused` – read only, wether playback is paused