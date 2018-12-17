<template>
  <div>
    <h3 class="text-center text-muted">
      <b-jumbotron
        header="Tu zona privada"
        :lead =  userMessage
      >
        <p>Página de notas secretas {{ user.email }}</p>
        <b-btn
          href="#"
          variant="primary"
        >Crear Nota</b-btn>
      </b-jumbotron>
    </h3>
  </div>
</template>

<script>

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["user"]),
    userMessage: function (){
        return `Este es tu zona privada ${this.user.email}`
    }
  },

};
</script>
