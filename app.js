const app = Vue.createApp({

  data() {
    return {
      firstName: 'Chan',
      lastName: 'Chan',
      email: 'h951115951115@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
})

app.mount('#app')
