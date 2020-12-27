<template>
  <div id="details">
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
     <b-container id="details-head">
      <b-row>
        <b-col cols="4">
          <b-form-select v-model="selected">
            <b-form-select-option :value="prov" v-for="(prov, idx) in provinsi" :key="idx">{{ prov }}</b-form-select-option>
        </b-form-select> 
        </b-col>
        <b-col cols="8">
          <h2 v-model="selected">{{selected}}</h2>
          <h4>Update Terakhir: 25 Desember 2020</h4>
          <b-row v-for="(data, index) in apiData" :key="index">
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
                <div id="card-sembuh">
                  <h5 class="mb-3">Sembuh</h5>
                  <h3 id="nilai-sembuh">{{data.sembuh}}</h3>
               </div>
             </b-card>
            </b-col>
            <b-col>
              <b-card  class="text-center">
                <div id="card-meninggal">
                  <h5 class="mb-3">Meninggal</h5>
                  <h3 id="nilai-meninggal">{{data.meninggal}}</h3>
               </div>
             </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'details',
  data () {
    return {
      selected: null,
      provinsi: null,
      data: null
    }
  },
  async created () {
    await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
      .then((res) => {
        let data = res.data
        let arr = []
        console.log(res.data)

        for(let i = 0; i < data.length; i++) {
          if(data) {
            arr.push(data[i].provinsi)
          }
        }
        this.provinsi = arr
        this.data = res.data
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })
  },
  computed: {
    apiData () {
      let data = this.data
      let arr = []

      if(this.selected) {
        for(let i = 0.; i < data.length; i++) {
          if(this.selected === data[i].provinsi) {
            let object = {
              positif: data[i].kasus,
              sembuh: data[i].sembuh,
              meninggal: data[i].meninggal
            }
            arr.push(object)
          }
        }
      }
      return arr
    }
  }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

.text-center {
   box-shadow: 5px 10px #DADADA;
}

#details {
  font-family: 'Roboto', sans-serif;
  background-color: #F3F4F8;
  color: #595E6B;
}
#details-head {
  margin-top: 100px;
}

#form {
  margin-top: 50px;
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
</style>
