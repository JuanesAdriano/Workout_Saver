<template>
  <v-container>
    <v-flex sm5 offset-sm1>
      <h3>Cadastro Set</h3>
    </v-flex>
    <v-layout>
      <v-flex sm6 offset-sm2 class="yellow--text">{{nome}}</v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm-4 offset-sm1>
        <v-text-field placeholder="Nº de Sets:" v-model="qtdSets"></v-text-field>
      </v-flex>
      <v-flex sm-4 offset-sm1>
        <v-text-field placeholder="Nº de Repeticoes:" v-model="qtdRepeticoes"></v-text-field>
      </v-flex>
    </v-layout>
    <v-flex sm3 offset-sm1>
      <v-btn class="success" @click="cadastrarSet()">Cadastrar</v-btn>
    </v-flex>
  </v-container>
</template>
<script>
  import db from '../../firebaseFiles/firebaseInit'
  export default {
    computed:{
      nome(){
        return this.qtdSets + " sets de " + this.qtdRepeticoes;
      },
      codigo(){
        return this.qtdSets+"X"+this.qtdRepeticoes;
      }
    },
    data(){
      return{
        qtdSets: 0,
        qtdRepeticoes: 0,
      }
    },
    methods:{

      //métodos do firebase
      cadastrarSet(){
        db.collection('sets').doc(this.codigo).set(
          {
            nome: this.nome,
            repeticoes: this.qtdRepeticoes,
            sets: this.qtdSets
          }
        ).then(function () {
          console.log("Set Cadastrado!")
        })
      }
    }
  }
</script>
