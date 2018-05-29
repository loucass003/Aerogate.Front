<template>
  <v-flex xs12 sm6>
    <v-card>
      <v-card-media
        :class="temperatureStyle"
        height="200px"
      >
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs6>
              <span class="headline">Temperature {{ name }}</span>
              <h1 style="font-size: 5vw">{{ value || '--' }} °C</h1>
            </v-flex>
            <v-flex xs6>
              <v-icon
                id="sun"
                style="font-size: 10vw; text-align: center; height: 100%; width: 100%"
                :color="iconColor">{{ icon }}</v-icon>

            </v-flex>
            <!-- <v-menu bottom left>
              <v-btn icon slot="activator" dark>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile>
                  <v-list-tile-title>test</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu> -->
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
      name: 'Temperature',
      props: {
        name: String,
        value: Number,
        color: String,
        icon: String,
        textClass: String,
        iconColor: String
      },
      data() {
        return {
            temperatureStyle: [ this.color, this.textClass ]
        }
      }
  }
</script>
