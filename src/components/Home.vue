<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
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
        <grid></grid>
        <graph></graph>
    </v-layout>
  </v-container>
</template>

<script>
  import Temperature from "./Temperature";
  import Graph from "./Graph";
  import Grid from "./Grid";

  export default {
    components: { Temperature, Graph, Grid },
    name: 'home',
    data() {
        return {
            inter: undefined,
            ext: undefined,
            myvar: "Home"
        }
    },
    sockets:{
      temperatures({inter = this.inter, ext = this.ext})  { 
        return Object.assign(this, { inter, ext })
      }
    }
  }
</script>
