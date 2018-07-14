<template>
 <div>
  <div class="home">
    <p v-show="text.length>0">{{text}}</p>
    <div class="card" v-for="(result, index) in results">
        <div  v-on:click="handleClick(index)">
        <router-link to="/details">
        <img v-bind:src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2/' + result.poster_path" alt="">
        </router-link>
        </div>
        <div>
        <h3>{{ result.title }}</h3>
        <p class="overview" v-if="result.overview.length > 200">{{ result.overview.slice(0, 200) + '...' }}</p>
        <p class="overview" v-else>{{ result.overview }}</p>
        </div>

    </div>
  </div>
  <button v-on:click="onClickMinus" v-show="counter>1">previus 20 films</button>
  <button v-on:click="onClickPlus">next 20 films</button>

</div>
</template>

<script>
export default {
  name: 'home',
  props: ['msg', 'api', 'svl'],
  data () {
    return {
      results: [],
      counter: 1,
      text: ''
   }
 },

    methods: {
      onClickPlus () {
        this.counter +=1
        console.log(this.counter)
        let options = {
          params: {
              page: this.counter,
              query: this.svl
          }
        }
        this.$http.get(this.api, options).then(function(response) {

            console.log(response)
            this.results = response.data.results


        },
           console.log
        )
      },

     onClickMinus () {
       this.counter -=1
       console.log(this.counter)
       let options = {
         params: {
             page: this.counter,
             query: this.svl
         }
       }
       this.$http.get(this.api, options).then(function(response) {


           this.results = response.data.results


       }, function(error) {
          console.log(error)
       })
     },

      getPopularFilms: function () {


                this.results = this.msg
                console.log(this.results)
                if(this.results.length === 0) {
                  this.text = 'There are no movies that matched your query.'
                }

      },

      handleClick(index) {
        this.currentResult = this.results[index];
        //console.log(this.currentResult.id)
        localStorage.setItem('movie-id', this.currentResult.id)
        }
    },
      created: function() {
        this.getPopularFilms()
      }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 100px 200px
}
.card {
  display: flex;
  width: 400px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  margin-bottom: 15px;
  background-color: #c8cecc;
}
h3 {
 height: auto;
 margin: 0;
}
.overview {
  font-size: 75%;
}
button {
  margin-bottom: 50px;
  font-size: 20px;
}
</style>
