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
    sockets:{
      temperatures({inter, ext})  { 
        console.log(ext, inter);
        return Object.assign(this, { inter, ext })
      }
    },
    methods: {
      random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      }
    }
  }
</script>
