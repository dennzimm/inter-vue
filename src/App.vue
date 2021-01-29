<template>
  <div id="app">
    <div id="app">
      <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="graph"
        aria-labelledby="title"
        role="img"
      >
        <title id="title">A line chart showing some information</title>
        <g class="grid x-grid" id="xGrid">
          <line x1="90" x2="90" y1="5" y2="371"></line>
        </g>
        <g class="grid y-grid" id="yGrid">
          <line x1="90" x2="705" y1="370" y2="370"></line>
        </g>
        <g class="labels x-labels">
          <text x="100" y="400">2008</text>
          <text x="246" y="400">2009</text>
          <text x="392" y="400">2010</text>
          <text x="538" y="400">2011</text>
          <text x="684" y="400">2012</text>
          <text x="400" y="440" class="label-title">Year</text>
        </g>
        <g class="labels y-labels">
          <text x="80" y="15">15</text>
          <text x="80" y="131">10</text>
          <text x="80" y="248">5</text>
          <text x="80" y="373">0</text>
        </g>
        <g class="data" data-setname="Our first data set">
          <!-- data  here (hint: polyline & circle) -->
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
//re-create the graph. The graph should work with any amount of data given in the json-format shown below
//dont use any external libraries
//some stylings: gap between segments on the x axis is 100, 80 on the y axis
//the x axis is offset by 80 and the y by 100
//css styling is give as is. No need to change it

export default {
  name: "App",
  data() {
    return {
      records: [
        {
          year: "2012",
          population: "160",
          entry_id: "1",
        },
        {
          year: "2013",
          population: "173",
          entry_id: "2",
        },
        {
          year: "2014",
          population: "195",
          entry_id: "3",
        },
        {
          year: "2015",
          population: "223",
          entry_id: "4",
        },
        {
          year: "2016",
          population: "203",
          entry_id: "5",
        },
        {
          year: "2017",
          population: "256",
          entry_id: "6",
        },
        {
          year: "2018",
          population: "298",
          entry_id: "7",
        },
        {
          year: "2019",
          population: "395",
          entry_id: "8",
        },
      ],
    };
  },
};
</script>

<style>
body {
  font-family: "Open Sans", sans-serif;
  height: 100%;
  width: 100%;
}

.graph .labels.x-labels {
  text-anchor: middle;
}

.graph .labels.y-labels {
  text-anchor: end;
}

.graph {
  padding-top: 100px;
  height: 100vh;
  width: 100vw;
}

.graph .grid {
  stroke: #ccc;
  stroke-dasharray: 0;
  stroke-width: 1;
}

.labels {
  font-size: 13px;
}

.label-title {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  fill: black;
}

.data {
  fill: white;
  stroke-width: 1;
  stroke: blue;
}
</style>
