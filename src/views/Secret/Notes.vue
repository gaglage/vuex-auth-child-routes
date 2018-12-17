<template>
  <div>
    <h3 class="text-center text-muted">
      <b-jumbotron
        :lead="userMessage"
        header="Tu zona privada"
      >
        <p>Página de notas secretas {{ user.email }}</p>
        <b-btn
          href="#"
          variant="primary"
        >Crear Nota</b-btn>
      </b-jumbotron>
    </h3>
    <b-carousel
      :interval="4000"
      @sliding-end="onSlideEnd"
      @sliding-start="onSlideStart"
      background="#ababab"
      controls
      id="carousel1"
      img-height="480"
      img-width="1024"
      indicators
      style="text-shadow: 1px 1px 2px #333;"
      v-model="slide"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        img-src="https://picsum.photos/1024/480/?image=52"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          alt="image slot"
          class="d-block img-fluid w-100"
          height="480"
          slot="img"
          src="https://picsum.photos/1024/480/?image=55"
          width="1024"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide
        caption="Blank Image"
        img-alt="Blank image"
        img-blank
      >
        <b-card
          img-alt="Card Image"
          img-src="https://picsum.photos/900/250/?image=36"
          overlay
          sub-title="Subtitle"
          text-variant="white"
          title="Image Overlay"
        >
          <p class="card-text">
            Some quick example text to build on the card and make
            up the bulk of the card's content.
          </p>
        </b-card>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}
      <br>
      Sliding: {{ sliding }}
    </p>

    <h1>Select box</h1>
    <b-dropdown
      :text="ddTestVm.ddTestSelectedOption"
      class="m-md-2"
      id="ddCommodity"
      name="ddCommodity"
      v-model="ddTestVm.ddTestSelectedOption"
      v-on:change="changeItem"
      variant="primary"
    >
      <b-dropdown-item
        disabled
        value="0"
      >Select an Item</b-dropdown-item>
      <b-dropdown-item
        :key="option.value"
        :value="option.value"
        @click="ddTestVm.ddTestSelectedOption = option.value"
        v-for="option in ddTestVm.options"
      >{{option.text}}</b-dropdown-item>
    </b-dropdown>
    <span>Selected: {{ ddTestVm.ddTestSelectedOption }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      someOtherProperty: null,
      ddTestVm: {
        originalValue: [],
        ddTestSelectedOption: "Value1",
        disabled: false,
        readonly: false,
        visible: true,
        color: "",
        options: [
          {
            value: "Value1",
            text: "Value1Text"
          },
          {
            value: "Value2",
            text: "Value2Text"
          },
          {
            value: "Value3",
            text: "Value3Text"
          }
        ]
      }
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },

    changeItem: async function() {
      //grab some remote data
      try {
        let response = await this.$http.get(
          "https://www.example.com/api/" +
            this.ddTestVm.ddTestSelectedOption +
            ".json"
        );
        console.log(response.data);
        this.someOtherProperty = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  computed: {
    ...mapState("auth", ["user"]),
    userMessage: function() {
      return `Este es tu zona privada ${this.user.email}`;
    }
  }
};
</script>


