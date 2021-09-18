<template>
  <canvas id="jplayer" :style="{ width: width, height: height }"></canvas>
</template>

<script>
export default {
  name: "JPlayer",
  props: {
    width: {
      type: String,
      default: "400px",
    },
    height: {
      type: String,
      default: "300px",
    },
    url: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  data() {
    return {
      initOptions: {
        decodeFirstFrame: true,
        disableWebAssembly: false,
        throttled: false,
        chunkSize: 1024 * 1024,
        disableGl: false,
        loadTsFirstFrame: false,
        loop: true,
        autoplay: true,
        enableAudio: false,
      },
    };
  },
  mounted() {
    this.loadScript("./jsmpeg.min.js", this.init);
  },
  methods: {
    loadScript(url, cb) {
      var script = document.createElement("script");
      script.src = url;
      var firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(script, firstScript);

      // script 加载完毕后调用方法
      script.onload = script.onreadystatechange = function () {
        if (
          !this.readyState || //这是FF的判断语句，因为ff下没有readyState这个值，IE的readyState肯定有值
          this.readyState == "loaded" ||
          this.readyState == "complete" // 这是IE的判断语句
        ) {
          cb && cb();
        }
      };
    },
    init() {
      let option = {};
      Object.assign(option, this.initOptions, this.options);
      let Jplayer = new JSMpeg.Player(this.url, {
        canvas: document.getElementById("jplayer"),
        ...option,
        onSourceCompleted: () => {
          this.$emit("loaded");
        },
        onEnded: () => {
          this.$emit("ended");
        },
      });
      window.Jplayer = Jplayer;
      this.$emit("init", Jplayer);
    },
  },
};
</script>

<style>
</style>