<template>
  <div class='hello'>
    <h1>{{msg}}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>awesome-vue</li>
    </ul>
    <Button type='primary'>123</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
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
