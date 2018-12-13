<template>
  <b-form @submit.prevent="$emit('login')">
    <b-form-group
      description="los datos son privados"
      label="Email"
    >
      <b-form-input
        :state="validateState('email')"
        autocomplete="off"
        name="email"
        placeholder="introduce el email admin@vue.com"
        type="email"
        v-model="user.email"
        v-validate="'required|email'"
      ></b-form-input>
      <b-form-invalid-feedback>{{ errors.first('email') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group label="Password">
      <b-form-input
        :state="validateState('password')"
        autocomplete="off"
        name="password"
        placeholder="introduce el password  @Password1"
        type="password"
        v-model="user.password"
        v-validate="'required|min:6|strength_password'"
      ></b-form-input>
      <b-form-invalid-feedback>{{ errors.first('password') }}</b-form-invalid-feedback>
    </b-form-group>

    <b-button
      :disabled="errors.any() || !user.password"
      class="button"
      type="submit"
      variant="primary"
    >Iniciar sesión</b-button>
  </b-form>
</template>

<script>
import validateMixin from "@/mixins/validation";
export default {
  mixins: [validateMixin],
  props: {
    user: {
      type: Object,
      required: true,
      validator: user => {
        if (!user.hasOwnProperty("email") || !user.hasOwnProperty("password")) {
          console.warn("usuario no váldo");
          return false;
        }
        return true;
      }
    }
  }
};
</script>

<style scoped>
</style>