<template>
  <v-flex sm12>
    <v-card class="white--text grey">
      <ve-line :data="chartData" class="white"></ve-line>
    </v-card>
  </v-flex>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import moment from 'moment'

export default {
    name: 'Graph',
    data() {
      return {
        chartData: {
          columns: ['date', 'Monoxyde de Carbonne (ppm)', 'Fumée (ppm)'],
          rows: []
        },
        chartSettings: {
          metrics: ['cost', 'profit'],
          dimension: ['date']
        }
      }
    },
    created() {
      let array = [];
      let last_co_value = 500;
      let last_s_value = 0;
      for(let i = 0; i < 100; i++) {
        moment.locale('fr'); 
        const date = moment().subtract((100 - i) * 30, 'seconds').format('LTS');
        console.log(date)
        array.push({
          'date': date,
          'Monoxyde de Carbonne (ppm)': (this.clamp(last_co_value = this.random(last_co_value - 5, (last_co_value) + 5), 0, 700) / 100).toFixed(2),
          'Fumée (ppm)': (this.clamp(last_s_value = this.random(last_s_value - 5, (last_s_value) + 5), 0, 300) / 100).toFixed(2),
        });
      }

      let i = 100;
      setInterval(() => {
        array.push({
          'date': moment().format('LTS'),
          'Monoxyde de Carbonne (ppm)': (this.clamp(last_co_value = this.random(last_co_value - 5, (last_co_value) + 5), 0, 700) / 100).toFixed(2),
          'Fumée (ppm)': (this.clamp(last_s_value = this.random(last_s_value - 5, (last_s_value) + 5), 0, 20) / 100).toFixed(2),
        });
      }, 30000)
      this.chartData.rows = array;
      console.log(array);
    },
    methods: {
      random(min, max) {
        return Math.floor(Math.random()*(max-min+1)+min);
      },
      clamp(input, min, max) {
        return Math.min(Math.max(input, min), max);
      }
    },
    components: { VeLine }
}
</script>
