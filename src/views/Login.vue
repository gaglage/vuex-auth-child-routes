<template>
  <div>
    <h3 class="tex-center text-muted mt-4">Iniciar sesión</h3>
    <b-alert
      show
      v-if="error"
      variant="danger"
    >{{ errorMessage }}</b-alert>
    <login-form
      :user="user"
      @login="submit"
    ></login-form>
  </div>
</template>

<script>
import LoginForm from "@/components/Authentication/Login";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      user: {
        email: "admin@vue.com",
        password: "@Password1"
      }
    };
  },
  computed: {
    ...mapState("auth", ["error", "errorMessage"])
  },
  methods: {
    ...mapActions('auth',{
      _login: 'signIn'
    }),
    async submit() {
      const validate = await this.$validator.validateAll()
      if (!validate){
        return false
      }
      await this._login(this.user)
      this.$router.push('/secret')
    }
  }
};
</script>

<style scoped>
</style>