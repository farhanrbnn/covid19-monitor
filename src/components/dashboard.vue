<template>
  <div class="dashboard">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#" id="brand">Covid 19 Monitor</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>Info</b-nav-item>
        <b-nav-item>Tentang</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>   
     <b-container>
      <div id="global-head">
       <h2>Global</h2>
       <h4>last update: 25 Desember 2020</h4>
      </div>
     </b-container>
  </div>
</template>

<script>
export default {
  name: 'dashboard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

.dashboard {
  font-family: 'Roboto', sans-serif;
}

#global-head {
  margin-top: 100px;
}
</style>
