<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs-12>
        <v-expansion-panel>
          <v-expansion-panel-content value="true">
            <div slot="header">
              Wireless Networks
              <v-btn icon @click.stop="refreshNetworks()" :disabled="networksRequest">
                <v-icon>refresh</v-icon>
              </v-btn>
            </div>
            <v-card>
              <v-data-table
                :headers="networks_header"
                :items="networks"
                hide-actions
                class="elevation-1"
                :loading="networksRequest"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.item.ssid || '(No SSID)' }}</td>
                  <td>{{ props.item.flags }}</td>
                </template>
              </v-data-table>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>

  export default {
    name: 'settings',
    data() {
      return {
        networks_header: [
          { text: 'SSID', value: 'ssid'},
          { text: 'FLAGS', value: 'flags'}
        ],
        networksRequest: false,
        networks: []
      }
    },
    sockets: {
      wifi_list({ data }) {
        this.networksRequest = false;
        this.networks = data;
      }
    },
    created() {
      this.refreshNetworks();
    },
    methods: {
      refreshNetworks() {
        this.networksRequest = true;
        this.$socket.emit('refresh_networks')
      }
    }
  }
</script>
