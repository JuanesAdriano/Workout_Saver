import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/exercicio/cad',
      name: 'cadastro-exercicio',
      component: require( '@/components/exercicio/cadastroExercicio/FormCadastroExercicio.vue').default
    }
  ]
})
