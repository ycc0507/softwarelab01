<template>
    <div>
      <v-chart :option="chartOptions" style="width: 100%; height: 400px;"></v-chart>
    </div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
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
              label: {
              show: true,
              position: 'top'
                },
              itemStyle: {
                orderRadius: [5, 5, 0, 0], // 设置柱子的圆角
                color: (params) => {
                    // 定义每根柱子的渐变色
                    const colorList = [
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'red' },
                    { offset: 0, color: 'pink' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'orange' },
                    { offset: 0, color: 'lightyellow' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'yellow' },
                    { offset: 0, color: 'lightyellow' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'green' },
                    { offset: 0, color: 'lightgreen' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'cyan' },
                    { offset: 0, color: 'lightcyan' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'red' },
                    { offset: 0, color: 'pink' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'orange' },
                    { offset: 0, color: 'lightyellow' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'yellow' },
                    { offset: 0, color: 'lightyellow' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'green' },
                    { offset: 0, color: 'lightgreen' }
                  ]),
                  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 1, color: 'cyan' },
                    { offset: 0, color: 'lightcyan' }
                  ])
                ];
                return colorList[params.dataIndex];
              }
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
    