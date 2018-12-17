<template>
  <div>
    <b-nav tabs>
      <b-nav-item
        exact
        to="/secret"
      >Página secreta</b-nav-item>
      <b-nav-item
        exact
        to="/secret/notes"
      >Notas secreta</b-nav-item>

      <b-nav-item @click="_logout">Cerrar sesión</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations("auth", ["logout"]),
    _logout() {
      this.logout();
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
</style>