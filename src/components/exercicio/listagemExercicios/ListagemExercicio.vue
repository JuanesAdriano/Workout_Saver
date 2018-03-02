<template>
  <v-container>
    <v-flex xs8 offset-xs1><h3>Listagem de Exercícios</h3></v-flex>

    <v-layout row>
      <v-flex sm4 offset-sm1>
        <v-list>
          <v-list-tile v-for="ex in exercicios" :key="ex.codigo" ripple>

            <v-list-tile-title v-html="ex.nome" tag="<h2>"></v-list-tile-title>
            <v-list-tile-action>
              <v-btn class="info" @click.stop="abrirEditar(ex)">VER</v-btn>
            </v-list-tile-action>

          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialogMostraItem" max-width="500px">
      <v-card>
        <v-card-title>
          <h3>Editar Exercício</h3>
          <v-spacer></v-spacer>
          <v-dialog v-model="confirmDialogDelete" width="360px">
            <v-btn slot="activator" @click="confirmDialogDelete = true">Apagar</v-btn>
            <v-card>
              <v-card-title>Tem certeza?</v-card-title>

              <v-card-text>
                <v-layout row>
                  <v-flex xs5>
                    <v-btn block @click="confirmDialogDelete = false">Cancelar</v-btn>
                  </v-flex>
                  <v-flex xs5 offset-xs1>
                    <v-btn class="success" block @click="deletarExercicio(editId)">Sim</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-layout row>
              <v-flex sm12>
                <v-text-field v-model="editNome" placeholder="Nome"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs10>
                <v-text-field disabled v-if="!alteraQuadrante" placeholder="Quadrante"
                              v-model="editQuadrante"></v-text-field>
                <v-select v-else :items="quadrantes" v-model="editQuadrante" label="Quadrante"
                         item-value="text"></v-select>
              </v-flex>
              <v-flex xs2>
                <v-btn icon @click="alteraQuadrante = !alteraQuadrante">
                  <v-icon v-if="!alteraQuadrante">mode_edit</v-icon>
                  <v-icon v-else>cancel</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs5>
                <v-btn class="error" block @click="fecharDialogItem()">Voltar</v-btn>
              </v-flex>
              <v-flex xs5 offset-xs1>
                <v-btn class="success" block @click="editarExercicio(editId)">Salvar</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
  //importando a base iniciada do firebase
  import db from '../../firebaseFiles/firebaseInit'

  export default {

    data() {
      return {
        exercicios: [],
        dialogMostraItem: false,
        confirmDialogDelete: false,
        editNome: '',
        editQuadrante: '',
        editId: '',
        alteraQuadrante: false,

        quadrantes: [
          {text: 'Peitoral'}, {text: 'abdomem'}, {text: 'Coxas'}, {text: 'Panturrilhas'}, {text: 'Biceps'}, {text: 'Triceps'}, {text: 'Ombros'}, {text: 'Costas'}, {text: 'Trapézio'}, {text: 'Lombar'}]
      }
    },
    methods: {
      abrirEditar(exercicio) {
        console.log(exercicio.id);
        this.editNome = exercicio.nome;
        this.editQuadrante = exercicio.quadrante;
        this.editId = exercicio.id;
        this.dialogMostraItem = true;

      },

      //Métodos do Firebase
      listarExercicios() {
        this.exercicios = [];
        db.collection('exercicios').get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const data = {
                'id': doc.id,
                'nome': doc.data().nome,
                'quadrante': doc.data().quadrante
              };
              this.exercicios.push(data)
            })
          })
      },
      deletarExercicio(id) {

        db.collection('exercicios').doc(id).get()
          .then(doc => {
            doc.ref.delete();
//            console.log(doc)
          });

        this.confirmDialogDelete = false;

        setTimeout(
          this.fecharDialogItem(), 1000);

      },
      onHoverLinhaConsulta(){

      },
      editarExercicio(id) {
        db.collection('exercicios').doc(id)
          .update({
            "nome": this.editNome,
            "quadrante": this.editQuadrante
          }).then(function () {
          console.log("Exercício Editado com Sucesso");
//          this.alteraQuadrante = false;

        }).then(this.listarExercicios());

      this.alteraQuadrante = false
      },
      fecharDialogItem() {
        this.dialogMostraItem = false;
        this.listarExercicios();

      }
    },
    created() {
      this.listarExercicios();
    }
  }
</script>
