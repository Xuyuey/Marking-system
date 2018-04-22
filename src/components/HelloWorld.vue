<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/Compere">
      <button class="btn btn-default">Presetting</button>
    </router-link>
    <router-link to="/Mark">
      <button class="btn btn-default">Scoring system</button>
    </router-link>
    <router-link to="/Result">
      <button class="btn btn-default">Result</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to 打分系统'
    }
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
</style>
