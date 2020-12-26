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
     			<b-form-select v-model="selected" :options="options"></b-form-select>
     		</b-col>
     		<b-col cols="8">
     			<h2>DKI Jakarta</h2>
     			<h4>Update Terakhir: 25 Desember 2020</h4>
     			<b-row>
     				<b-col>
     					<b-card  class="text-center">
            		<div id="card-positif">
             		  <h5 class="mb-3">Positif</h5>
              	  <h3 id="nilai-positif">20000</h3>
               </div>
             </b-card>
     				</b-col>
     				<b-col>
     					<b-card  class="text-center">
            		<div id="card-sembuh">
             		  <h5 class="mb-3">Sembuh</h5>
              	  <h3 id="nilai-sembuh">20000</h3>
               </div>
             </b-card>
     				</b-col>
     				<b-col>
     					<b-card  class="text-center">
            		<div id="card-meninggal">
             		  <h5 class="mb-3">Meninggal</h5>
              	  <h3 id="nilai-meninggal">20000</h3>
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
export default {
	name: 'details',
	data () {
		return {
			selected: null,
			options: [
				{value:null, text: 'DKI Jakarta' }
			]
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
