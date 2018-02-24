<template>
  <v-app dark>
    <sidenav :drawerOn="drawer"></sidenav>
    <v-toolbar
      app
      class="teal"
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Sidenav from './components/layout/sideNav/sidenav.vue'
export default {
    components:{
      Sidenav
    },
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire',
        key:'HelloWorld',
        to: '/'
      },
        {
          icon: 'mdi mdi-account-check',
          title: 'Cadastro Exercício',
          key:'cadastro-exercicio',
          to:'/exercicio/cad'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Workout-Saver'
    }
  },
  name: 'App'
}
</script>
<style>
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }
</style>
