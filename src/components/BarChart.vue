<template>
    <div>
      <v-chart :option="chartOptions" style="width: 100%; height: 400px;"></v-chart>
    </div>
  </template>
  
  <script>
  import { getEmoji } from "@/api/emoji";
  export default {
    name: 'TouristSpotRating',
    data() {
      return {
        chartOptions: {
          title: {
            text: '一周内Emoji使用量',
          },
          tooltip: {
            trigger: 'axis',
          },
          xAxis: {
            type: 'category',
            data: ['呵呵', '嘿嘿', '笑哭了', '吐舌', '翻白眼', '脸发烧', '害怕', '怒火中烧', '睡着了', '放声大哭'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              name: '使用量',
              type: 'bar',
              data: [10, 15, 5, 14, 11, 19, 8, 12, 7, 13],
              itemStyle: {
                color: '#65c23a',
              },
            },
          ],
        },
      };
    },
    mounted() {
        getEmoji().then(res => {
            console.log(res.data.data);
            this.chartOptions.xAxis.data = res.data.data.map(item => item.name);
            this.chartOptions.series[0].data = res.data.data.map(item => item.count);
    });
  },
  };
  </script>
  
  <style scoped>
  /* 添加一些样式使图表看起来更好 */
  </style>
    