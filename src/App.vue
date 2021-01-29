<template>
  <div id="app">
    <PopulationChart />
  </div>
</template>

<script>
//re-create the graph. The graph should work with any amount of data given in the json-format shown below
//dont use any external libraries
//some stylings: gap between segments on the x axis is 100, 80 on the y axis
//the x axis is offset by 80 and the y by 100
//css styling is give as is. No need to change it

import PopulationChart from "@/components/PopulationChart";

export default {
  name: "App",
  components: {
    PopulationChart,
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
