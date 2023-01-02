import App from './app.vue'

class Cat {

  constructor(name: string, age: number) {
    this.foo(name, age)
  }

  foo(name: string, age: number):string {
    return name + age
  }
}

const kitty = new Cat('kitty', 7)
console.log(kitty.foo('kitty', 7))

export default Cat

import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
