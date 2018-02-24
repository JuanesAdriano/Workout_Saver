<template>
  <v-container>
    <v-flex xs11 offset-xs1><h3>Listagem de Exercícios</h3></v-flex>
    <v-layout row>
      <v-flex sm11 offset-sm1>Response:{{exercicios}}</v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  //importando a base iniciada do firebase
  import db from '../../firebaseFiles/firebaseInit'

  export default {
    data(){
      return{
        exercicios:[]
      }
    },
    created(){
      db.collection('exercicios').get()
        .then(querySnapshot =>{
          querySnapshot.forEach(doc=>{
            console.log(doc.data());
            const data={

            }
          })
        })
    }
  }
</script>
