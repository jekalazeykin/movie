<template>
  <div id="app">
  <header>
    <router-link to="/">
    <div class="logo">
      MovieHub
    </div>
    </router-link>
  </header>
    <img src="./assets/musica-searcher.svg" alt="icon" class="icon">
  <input type="text" v-model="searchValue" v-on:keyup.enter="getSearch" class="search" placeholder="Search for a movie">
  <!-- <h1 >{{message}}</h1> -->
  <!-- <home :msg="message"></home> -->
  <router-view :msg="searcResults" :api="apiUrl" :svl="searchValue" />
  <footer></footer>
  </div>
</template>

<script>
// import home from '@/components/home'

export default {
  name: 'App',
  // components: {
  //   home
  // },
  data () {
    return {
      searcResults: [],
      searchValue: '',
      apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&query=&page=1&include_adult=false"
    }
  },
  methods: {

    getSearch () {
      let options = {
        params: {
            query: this.searchValue
        }
      }
      this.$http.get(this.apiUrl, options).then(function(response) {

        //  console.log(window.location.href)
        this.searcResults = response.data.results
        window.location.href = '#/search'
        //this.searchValue = ''

      },
         console.log
      )
    }
  }
}

</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  height: 120px;
  background-color: #10074f;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
footer{
  height: 300px;
  background-color: #10074f
}
.search {
  width: 100%;
  height: 3rem;
  padding: 0 300px;
  font-size: 1.4rem;
}
.search:focus {
  outline: none;
}
.icon {
  width: 25px;
  height: 25px;
  position: absolute;
  top: 130px;
  left: 260px;
}
.logo {
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
  font-size: 1.3rem;
}
a {
  text-decoration: none;
}
</style>
