import Vue from 'vue'
import { urlTareas } from './url'

var miMixin = {
    methods: {
        getTareas() {
            this.axios.get(urlTareas)
            .then( res => {
              console.log(res.data)
              this.$store.dispatch('getTareas', res.data)    
            })
            .catch(error => {
              console.log('ERROR GET HTTP', error)
            })
        }
    }
}

Vue.mixin(miMixin)