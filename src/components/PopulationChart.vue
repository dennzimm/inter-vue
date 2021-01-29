<template>
  <LineChart v-bind="chartData" />
</template>

<script>
import PopulationService from "@/services/population.service";

import LineChart from "@/components/LineChart";

export default {
  name: "PopulationChart",
  components: {
    LineChart,
  },
  data() {
    return {
      records: [],
      chartData: {
        title: "A line chart showing some information",
        xAxisTitle: "Year",
        xAxisLabels: [],
        yAxisMaxValue: 0,
        chartValues: [],
      },
    };
  },
  async mounted() {
    this.records = await PopulationService.getPopulations();
    this.updateChartData();
  },
  methods: {
    updateChartData() {
      const transformedRecords = this.records.reduce(
        (transformedRecords, currentRecord) => ({
          allYears: [...transformedRecords.allYears, currentRecord.year],
          allPopulations: [
            ...transformedRecords.allPopulations,
            +currentRecord.population,
          ],
          maxPopulation: Math.max(
            transformedRecords.maxPopulation,
            +currentRecord.population
          ),
        }),
        {
          allYears: [],
          allPopulations: [],
          maxPopulation: 0,
        }
      );

      this.chartData.xAxisLabels = transformedRecords.allYears;
      this.chartData.yAxisMaxValue = transformedRecords.maxPopulation;
      this.chartData.chartValues = transformedRecords.allPopulations;
    },
  },
};
</script>
