<template>
    <main>
    <img v-bind:src="'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + post.poster_path" alt="">
    <div class="">
    <h1>{{post.title}}</h1>
    <h2>{{post.release_date}}</h2>
    <p>popularity: {{post.popularity}}</p>
    <p>runtime: {{post.runtime}} min</p>
    <p class="overview">{{post.overview}}</p>
      </div>
    </main>
    <!-- <img class="poster" src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg" srcset="https://image.tmdb.org/t/p/w300_and_h450_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg 1x, https://image.tmdb.org/t/p/w600_and_h900_bestv2/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg 2x" alt="Jurassic World: Fallen Kingdom"> -->
</template>

<script>
export default {
  name: 'details',
  data () {
    return {
      data: localStorage.getItem('movie-id'),
      post: {}
    }
  },
  computed: {
  resource: function() {
          return this.$resource('https://api.themoviedb.org/3/movie/{id}?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US')
      }
  },
  methods: {
    getData () {

     console.log(this.data)

    },

    getSinglePost: function() {

            this.resource.get({ id: this.data }).then(function(response) {

                this.post = response.data
                console.log(this.post)

            })

        }
  },
  created: function() {
    this.getSinglePost()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: 800;
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
main {
 background-color:#595a5b;
 color: #fff;
 padding: 100px 0;
 display: flex;
 padding: 70px 200px;
}
.overview {
 margin-bottom: 0;
 text-align: left;
 padding-left: 30px;
}
</style>
