import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyDJGXsIXwk17Wl4QModUh5PtXYDPTEznWc",
      authDomain: "my-address-pj-be56f.firebaseapp.com",
      projectId: "my-address-pj-be56f",
      storageBucket: "my-address-pj-be56f.appspot.com",
      messagingSenderId: "491543136402",
      appId: "1:491543136402:web:b6214ed635e175588e7e4b",
      measurementId: "G-LC4HL790ED"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
