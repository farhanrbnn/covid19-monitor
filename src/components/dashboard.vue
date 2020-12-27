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
      <div id="global-head" class="mb-4">
       <h2>Global</h2>
       <h4>Update Terakhir: <span>{{globalLastUpdate}}</span></h4>
      </div>
      <b-row v-for="(data, idx) in apiDataGlobal" :key="idx">
        <b-col >
          <b-card  class="text-center">
            <div id="card-positif">
              <h5 class="mb-3">Positif</h5>
              <h3 id="nilai-positif">{{data.positif}}</h3>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="text-center">
            <div id="card-sembuh">
              <h5 class="mb-3">Sembuh</h5>
              <h3 id="nilai-sembuh">{{data.sembuh}}</h3>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card class="text-center">
            <div id="card-meninggal">
             <h5 class="mb-3">Meninggal</h5>
              <h3 id="nilai-meninggal">{{data.meninggal}}</h3>
            </div>
          </b-card>
        </b-col>
      </b-row>
      <div id="countries-head" class="mb-4">
       <h2>Indonesia</h2>
       <h4>Update Terakhir: <span>{{IDNLastUpdate}}</span></h4>
      </div>
      <b-row v-for="(data, idx) in apiDataIDN" :key="idx+1">
        <b-col>
          <b-card  class="text-center">
            <div id="card-positif">
              <h5 class="mb-3">Positif</h5>
              <h3 id="nilai-positif">{{data.positif}}</h3>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card  class="text-center">
            <div id="card-positif">
              <h5 class="mb-3">Sembuh</h5>
              <h3 id="nilai-sembuh">{{data.sembuh}}</h3>
            </div>
          </b-card>
        </b-col>
        <b-col>
          <b-card  class="text-center">
            <div id="card-positif">
              <h5 class="mb-3">Meninggal</h5>
              <h3 id="nilai-meninggal">{{data.meninggal}}</h3>
            </div>
          </b-card></b-col>
      </b-row>
      <b-button class="my-5" variant="info"><router-link to="/details"><p id="router-details">More Details</p></router-link></b-button>
     </b-container>
     <b-container>
       <div id="test">
        <h4>Stay at Home !</h4>
        <h4>Stay Safe !</h4>
        <p></> by <a href="https://github.com/farhanrbnn">farhanrbnn</a> | API by <a href="https://github.com/mathdroid/covid-19-api">mathdroid</a> and <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2">Reynadi531</a></p>
       </div>
     </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dashboard',
  data () {
    return {
      apiDataGlobal: [],
      apiDataIDN: [],
      globalLastUpdate: null,
      IDNLastUpdate: null
    }
  },
  async created () {
    await axios.get('https://covid19.mathdro.id/api')
      .then((res) => {
        let object = {
          positif: res.data.confirmed.value,
          sembuh: res.data.recovered.value,
          meninggal: res.data.deaths.value
        }
        console.log(this.apiDataGlobal)
        this.apiDataGlobal.push(object)
        this.globalLastUpdate = res.data.lastUpdate
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })

    await axios.get('https://covid19.mathdro.id/api/countries/indonesia')
      .then((res) => {
        let object = {
          positif: res.data.confirmed.value,
          sembuh: res.data.recovered.value,
          meninggal: res.data.deaths.value
        }

        this.apiDataIDN.push(object)
        this.IDNLastUpdate = res.data.lastUpdate
        console.log(this.apiDataIDN)
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

.dashboard {
  font-family: 'Roboto', sans-serif;
  background-color: #F3F4F8;
  color: #595E6B;
}

#global-head {
  margin-top: 100px;
}

#nilai-positif {
  color: #DCB93D;
}

#nilai-sembuh {
  color: #7BB87A;
}

#nilai-meninggal {
  color: #FF7C7C;
}

#countries-head {
  margin-top: 100px;
}

#test {
  height: 100px;
  background-color: #F3F4F8;
}

.text-center {
   box-shadow: 5px 10px #DADADA;
}

#router-details {
  margin-bottom: 0;
  color: white;
}
</style>
