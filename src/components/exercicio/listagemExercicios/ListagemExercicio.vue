<template>
  <v-container>
    <v-flex xs11 offset-xs1><h3>Listagem de Exercícios</h3></v-flex>
    <v-layout row>
      <v-flex sm4 offset-sm1>
        <v-list>
          <v-list-tile v-for="ex in exercicios" :key="ex.codigo" ripple>

                <v-list-tile-title v-html="ex.nome" tag="<h2>"></v-list-tile-title>
            <v-list-tile-action>
              <v-button class="info" >VER</v-button>
            </v-list-tile-action>

          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  //importando a base iniciada do firebase
  import db from '../../firebaseFiles/firebaseInit'

  export default {
    data() {
      return {
        exercicios: []
      }
    },
    created() {
      db.collection('exercicios').get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              'codigo': doc.id,
              'nome': doc.data().nome,
              'quadrante': doc.data().quadrante
            }
            this.exercicios.push(data)
          })
        })
    }
  }
</script>
