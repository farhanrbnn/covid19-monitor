<template>
  <div id="details">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/" id="brand">Covid 19 Monitor</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item @click="alertClick">Tentang</b-nav-item>
      </b-navbar-nav>
      </b-collapse>
     </b-navbar>
     <b-container id="details-head">
      <b-row>
        <b-col cols="4" >
          <h5>Pilih Provinsi</h5>
          <b-form-select v-model="selected">
            <b-form-select-option :value="prov" v-for="(prov, idx) in provinsi" :key="idx">{{ prov }}</b-form-select-option>
        </b-form-select>
        </b-col>
        <b-col cols="8" >
          <h2>{{selected}}</h2>
          <b-row v-for="(data, index) in apiData" :key="index">
            <b-col lg>
              <b-card  class="text-center">
                <div id="card-positif">
                  <h5 class="mb-3">Positif</h5>
                  <h3 id="nilai-positif">{{data.positif}}</h3>
               </div>
             </b-card>
            </b-col>
            <b-col lg>
              <b-card  class="text-center">
                <div id="card-sembuh">
                  <h5 class="mb-3">Sembuh</h5>
                  <h3 id="nilai-sembuh">{{data.sembuh}}</h3>
               </div>
             </b-card>
            </b-col>
            <b-col lg>
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
      <b-row id="data-akumulasi">
        <b-col>
          <h4>Data Akumulasi Kasus COVID-19 di Indonesia</h4>
          <line-chart v-if="loaded" :chart-data="chartData" ></line-chart>
        </b-col>
      </b-row>
     </b-container>
  </div>
</template>

<script>
import axios from 'axios'
import LineChart from '@/components/lineChart'

export default {
  name: 'details',
  components: {
    LineChart
  },
  data () {
    return {
      selected: null,
      provinsi: null,
      data: null,
      positiveDaily: null,
      dailyDate: null,
      loaded: false,
      chartData: null
    }
  },
  async created () {
    await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
      .then((res) => {
        this.loaded = true
        let data = res.data
        let arr = []

        for (let i = 0; i < data.length; i++) {
          if (data) {
            arr.push(data[i].provinsi)
          }
        }
        this.provinsi = arr
        this.data = res.data
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })

    await axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian')
      .then((res) => {
        this.loaded = true
        let data = res.data
        let arrPositive = []
        let arrDate = []

        for (let i = 0; i < data.length; i++) {
          if (data) {
            let APIDate = new Date(data[i].tanggal)

            arrPositive.push(data[i].positif_kumulatif)
            arrDate.push(APIDate.toLocaleDateString())
          }
        }

        this.dailyDate = arrDate
        this.positiveDaily = arrPositive

        this.chartData = {
          labels: this.dailyDate,
          datasets: [{
            label: 'Akumulasi Jumlah Kasus',
            backgroundColor: '#DCB93D',
            data: this.positiveDaily
          }]
        }

        console.log(this.chartData)
      })
      .catch((err) => {
        alert('error when fetching API' + err)
      })
  },
  methods: {
    alertClick () {
      this.$alert('Website ini digunakan untuk mempermudah pengaksesan data. Data yang tertera pada website ini berasal dari The Center for Systems Science and Engineering John Hopkins University dan data.covid19.go.id')
    }
  },
  computed: {
    apiData () {
      let data = this.data
      let arr = []

      if (data) {
        for (let i = 0; i < data.length; i++) {
          if (this.selected === data[i].provinsi) {
            let object = {
              positif: data[i].kasus.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
              sembuh: data[i].sembuh.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
              meninggal: data[i].meninggal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
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
  height: 930px;
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
#data-akumulasi {
  margin-top: 100px;
}
#test {
  height: 100px;
  background-color: #F3F4F8;
}
</style>
