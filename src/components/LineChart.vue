<template>
    <div>
      <v-chart :option="chartOptions" style="width: 100%; height: 300px;"></v-chart>
    </div>
  </template>
  
  <script>
  import { getEmoji } from "@/api/emoji";
  import * as echarts from 'echarts';
  export default {
    name: 'EmojiCount',
    data() {
      return {
        chartOptions: {
          title: {
            text: '一周内Emoji使用量统计',
          },
          tooltip: {
            trigger: 'axis',
          },
          legend: {
            data: ['使用数'],
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
              name: '使用数',
              type: 'line',
              data: [10, 15, 5, 14, 11, 19, 8, 12, 7, 13],
              areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(80,215,237,0.99)'
                },
                {
                  offset: 1,
                  color: 'rgb(28,70,206)'
                }
              ])
            },
            },
          ],
        },
      };
    },
    mounted(){
      getEmoji().then(res => {
      console.log(res.data.data);
      this.chartOptions.series[0].data = res.data.data.map(item => item.count);
      this.chartOptions.xAxis.data = res.data.data.map(item => item.name);
      });
    },
  };
  </script>
  
  <style scoped>
  /* 添加一些样式使图表看起来更好 */
  </style>
  