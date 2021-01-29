<template>
  <svg
    version="1.2"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    class="graph"
    aria-labelledby="title"
    role="img"
  >
    <title id="title">{{ title }}</title>

    <g class="grid x-grid" id="xGrid">
      <line
        :x1="config.xAxisOffset"
        :x2="config.xAxisOffset"
        :y1="config.yAxisOffset"
        :y2="yAxisEnd"
      />
    </g>

    <g class="grid y-grid" id="yGrid">
      <line
        :x1="config.xAxisOffset"
        :x2="xAxisEnd"
        :y1="yAxisEnd"
        :y2="yAxisEnd"
      />
    </g>

    <g class="labels x-labels">
      <text
        v-for="(label, index) in xAxisLabels"
        :key="`${label}_${index}`"
        :x="config.xAxisOffset + index * config.xSegmentGap"
        :y="yAxisEnd + 20"
      >
        {{ label }}
      </text>

      <text
        v-if="xAxisTitle"
        :x="(config.xAxisOffset + xAxisEnd) / 2"
        :y="yAxisEnd + 40"
        class="label-title"
      >
        {{ xAxisTitle }}
      </text>
    </g>

    <g class="labels y-labels">
      <text
        v-for="(label, index) in yAxisLabels"
        :key="`${label}_${index}`"
        :x="config.xAxisOffset - 20"
        :y="yAxisEnd - index * config.ySegmentGap + 3"
      >
        {{ label }}
      </text>
    </g>

    <g class="data" data-setname="Our first data set">
      <polyline fill="none" stroke-width="2" :points="chartValuesCoordinates" />

      <circle
        v-for="(value, index) in chartValues"
        :key="`${value}_${index}`"
        :cx="chartValuesCoordinates[index][0]"
        :cy="chartValuesCoordinates[index][1]"
        :data-value="value"
        :r="config.circleRadius"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "LineChart",
  props: {
    title: {
      type: String,
      required: true,
    },
    xAxisTitle: {
      type: String,
    },
    xAxisLabels: {
      type: Array,
      default: () => [],
    },
    yAxisMaxValue: {
      type: Number,
      default: 400,
    },
    chartValues: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      config: {
        yAxisOffset: 100,
        xAxisOffset: 80,
        ySegmentGap: 80,
        xSegmentGap: 100,
        circleRadius: 4,
      },
    };
  },
  computed: {
    yAxisLabels() {
      const nearestMaxValue =
        Math.round(this.yAxisMaxValue / this.config.ySegmentGap) *
        this.config.ySegmentGap;

      const labelCount = nearestMaxValue / this.config.ySegmentGap + 1;

      return [...new Array(labelCount)].map((_, index) =>
        index === 0 ? "" : index * this.config.ySegmentGap
      );
    },
    yAxisHeight() {
      return (this.yAxisLabels.length - 0.5) * this.config.ySegmentGap;
    },
    xAxisLength() {
      return (this.xAxisLabels.length - 0.75) * this.config.xSegmentGap;
    },
    yAxisEnd() {
      return this.config.yAxisOffset + this.yAxisHeight;
    },
    xAxisEnd() {
      return this.config.xAxisOffset + this.xAxisLength;
    },
    chartValuesCoordinates() {
      return this.chartValues.reduce(
        (chartValuesCoordinates, currentValue, index) => [
          ...chartValuesCoordinates,
          [
            this.config.xAxisOffset + index * this.config.xSegmentGap,
            this.yAxisEnd - currentValue,
          ],
        ],
        []
      );
    },
  },
};
</script>

<style>
.graph .labels.x-labels {
  text-anchor: middle;
}

.graph .labels.y-labels {
  text-anchor: end;
}

.graph {
  /* padding-top: 100px; */
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
  stroke: #0074d9;
}
</style>
