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
                  <td>
                    <v-btn icon @click.stop="{ dialog.open = true; dialog.item = props.item }">
                      <v-icon v-html="props.item.connected ? 'delete' : 'add'"></v-icon>
                    </v-btn>
                    
                  </td>
                </template>
              </v-data-table>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog.open" max-width="500px">
      <v-card>
        <v-card-title>
          Wireless Network "{{ dialog.item.ssid }}"
        </v-card-title>
        <v-card-text>
          <v-text-field 
            v-model="dialog.pass"
            label="Password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="chooseWireless()">Save</v-btn>
          <v-btn color="primary" flat @click.stop="dialog.open = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>

  export default {
    name: 'settings',
    data() {
      return {
        networks_header: [
          { text: 'SSID', value: 'ssid'},
          { text: 'FLAGS', value: 'flags'},
          { text: 'Action', value: 'connected', width: "10px"}
        ],
        networksRequest: false,
        networks: [],
        dialog: {
          open: false,
          item: {},
          pass: ''
        },
      }
    },
    sockets: {
      wifi_list({ data }) {
        this.networks = data;  
        this.networksRequest = false;
        console.log(this.networks);
      }
    },
    created() {
      this.refreshNetworks();
    },
    methods: {
      refreshNetworks() {
        this.networksRequest = true;
        this.$socket.emit('refresh_networks')
      },
      chooseWireless() {
        this.$socket.emit('choose_network', this.dialog.item.ssid, this.dialog.pass);
      }
    }
  }
</script>
