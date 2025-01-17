import data from "../data/data.json";

export const calculateSuccessRate = () => {
  const { total_queries, successful_queries } = data.insight_summary;
  return ((successful_queries / total_queries) * 100).toFixed(2);
};

export const getTopCategory = () => {
  const categoryDistribution = data.category_distribution;
  return Object.entries(categoryDistribution).reduce((max, entry) =>
    entry[1] > max[1] ? entry : max
  );
};

export const calculateAverageRating = () => {
  const ratings = data.user_satisfaction.ratings;
  const totalRatings = ratings.reduce((sum, r) => sum + r.count, 0);
  const weightedSum = ratings.reduce((sum, r) => sum + r.rating * r.count, 0);
  return (weightedSum / totalRatings).toFixed(1);
};

export const getMostUsedPlatform = () => {
  const platforms = data.usage_statistics.by_platform;
  return Object.entries(platforms).reduce((max, entry) =>
    entry[1] > max[1] ? entry : max
  );
};
