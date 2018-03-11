<template>
  <v-container fluid grid-list-md>
      <draggable :options="{ group: 'components' }" @start="drag=true" @end="drag=false" class="layout wrap">
        <temperature
          name="int."
          :value="inter"
          icon="home"
          color="grey"
          text-class="white--text"
          icon-color="white"
        ></temperature>
        <temperature
          name="ext."
          :value="ext"
          icon="wb_sunny"
          color="blue"
          text-class="white--text"
          icon-color="yellow"
        ></temperature>
      </draggable>
  </v-container>
</template>

<script>
  import draggable from 'vuedraggable'
  import Temperature from "./Temperature";

  export default {
    components: { Temperature, draggable },
    name: 'home',
    data() {
        return {
            inter: 20,
            ext: 9,
            myvar: "Home"
        }
    },
    created: function() {
      console.log("Ready")
      setInterval(() => {
          this.inter += this.random(-1, 1) * 1; 
          this.ext += this.random(-1, 1) * 1;
      }, 5000);
    },
    methods: {
      random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }
    }
  }
</script>
