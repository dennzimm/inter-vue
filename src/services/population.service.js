import PopulationData from "@/data/population.data.json";

const PopulationService = {
  getPopulations: async () => PopulationData,
};

Object.freeze(PopulationService);
export default PopulationService;
