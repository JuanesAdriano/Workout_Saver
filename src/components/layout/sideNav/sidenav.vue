<template>
  <v-navigation-drawer class="blue-grey darken-2"
                       persistent
                       :mini-variant="miniVariant"
                       :clipped="clipped"
                       :value="drawer"
                       enable-resize-watcher
                       fixed
                       app
  >
    <v-list>
      <v-list-tile

        v-for="(item, i) in items"
        :key="item.key"
        :to="item.to"
        activeClass="orange--text"
      >
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    computed:{
      drawer(){
        return this.drawerOn
      }
    },
    data () {
      return {
        clipped: true,
//        drawer: this.drawerOn,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire',
          key:'HelloWorld',
          to: '/'
        },
          {
            icon: 'person',
            title: 'Cadastro Exercício',
            key:'cadastro-exercicio',
            to:'/exercicio/cad'
          }
        ],
        miniVariant: false,
      }
    },
    props:{
      drawerOn:{
        type: Boolean,
      }
  }
  }
</script>
