<template>
  <v-container>
    <v-flex xs11 offset-xs1>
      <h3>Cadastro de Exercícios</h3>
    </v-flex>
    <v-layout row>
      <v-flex sm9 offset-sm1>
        <v-text-field v-model="nome" placeholder="Nome do exercício"></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex sm4  offset-sm1>
        <v-select :items="quadrantes" v-model="quadranteSelecionado" label="Quadrante"></v-select>
      </v-flex>
    </v-layout>
    <v-flex sm3 offset-sm1>
    <v-btn class="success " round >Cadastrar</v-btn>
    </v-flex>
  </v-container>
</template>
<script>
  export default {
    data(){
      return{
        nome:'',
        quadranteSelecionado:'',
        quadrantes:[
          {text:'Peitoral'},{text: 'Abdomem'},{text: 'Coxas'}, {text:'Panturrilhas'},{text: 'Biceps'}, {text:'Triceps'}, {text:'Ombros'}, {text:'Costas'},{text: 'Trapézio'}, {text:'Lombar'}]
      }
    }
  }
</script>
