  // src/index.js
  import JPlayer from './JPlayer.vue';

  function install(Vue){ 
    Vue.component("JPlayer", JPlayer)
  }
  
  if(window && window.Vue) {  
    window.Vue.use(install)
  }
  
  export default install
  
