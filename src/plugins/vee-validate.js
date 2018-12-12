import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate'; // entre {} porque no está como export default
import validatorES from 'vee-validate/dist/locale/es'

Vue.use(VeeValidate,{
    fieldsBagName: 'veeFields'
})
Validator.localize('es', validatorES)