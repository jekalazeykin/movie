<template>
 <div>
   <!-- <h3>{{msg}}</h3> -->
  <div class="home">
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
   props: ['svl'],
  data () {
    return {
      results: [],
      counter: 1
   }
 },

    methods: {
      onClickPlus () {
        this.counter +=1
        console.log(this.counter)
        let options = {
          params: {
              page: this.counter
          }
        }
        this.$http.get("https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1", options).then(function(response) {


            this.results = response.data.results


        },
           console.log
        )
      },

     onClickMinus () {
       this.counter -=1
       console.log(this.counter)
       const options = {
         params: {
             page: this.counter
         }
       }
       this.$http.get("https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1", options).then(function(response) {


           this.results = response.data.results


       }, function(error) {
          console.log(error)
       })
     },

      getPopularFilms: function () {




          this.$http.get("https://api.themoviedb.org/3/movie/popular?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1").then(function(response) {


              console.log(response)
              // if(this.msg.length === 0){
                this.results = response.data.results
                console.log(this.results.overview)

            //  }
            //  else {
            //    this.results = this.msg
            //  }


          }, function(error) {
             console.log(error)
          })
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
  margin: 100px 200px;
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
