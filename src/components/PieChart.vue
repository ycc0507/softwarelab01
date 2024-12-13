<template>
    <div>
      <v-chart :option="chartOptions" style="width: 100%; height: 400px;"></v-chart>
    </div>
  </template>
  
  <script>
  import { getEmoji } from "@/api/emoji";
  export default {
    name: 'PieChart',
    data() {
      return {
        chartOptions: {
          title: {
            text: '一周内Emoji使用量分布'
          },
          tooltip: {},
          series: [{
            type: 'pie',
            data: [
              {name:'呵呵',value:10},
              {name:'嘿嘿',value:15},
              {name:'笑哭了',value:5},
              {name:'吐舌',value:14},
              {name:'翻白眼',value:11},
              {name:'脸发烧',value:19},
              {name:'害怕',value:8},
              {name:'怒火中烧',value:12},
              {name:'睡着了',value:7},
              {name:'放声大哭',value:13}],
              label: {
            normal: {
              position: 'outside', // 标签显示在饼图外部
              formatter: '{b}({d}%)' // 标签格式
            }
          },
          }]
        },
      };
    },
    mounted(){
      getEmoji().then(res => {
      console.log(res.data.data);
      this.chartOptions.series[0].data = res.data.data;
      });
    },
  };
  </script>
  
  <style scoped>
  /* 添加一些样式使图表看起来更好 */
  </style>
  
  