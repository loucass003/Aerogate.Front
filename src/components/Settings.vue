<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-text-field type="text" placeholder="Text input" @focus="show" data-layout="normal" v-model="text"></v-text-field>
    </v-layout>
    <v-bottom-sheet v-model="visible" persistent hide-overlay>
      <vue-touch-keyboard :layout="layout" :cancel="hide" :accept="hide" :input="input" :change="change" />
    </v-bottom-sheet>
  </v-container>

</template>

<script>
  import Vue from 'vue'
  import vuetouchkeyboard from 'vue-touch-keyboard'
  import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css";


  Vue.use(vuetouchkeyboard);

  export default {
    name: 'settings',
    components: { vuetouchkeyboard },
    data() {
      return {
        text: "",
        visible: false,
        layout: "normal",
        input: null,
        options: {
          useKbEvents: false
        }
      }
    },
    methods: {
      show(e) {
        this.input = e.target;
        this.layout = e.target.dataset.layout;

        if (!this.visible)
          this.visible = true
      },
      change() {
        console.log(this.text = this.input.value);
      },
      hide() {
        this.visible = false;
      }
    }
  }
</script>
