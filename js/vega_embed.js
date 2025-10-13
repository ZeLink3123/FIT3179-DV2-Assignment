// Sets up default vis for world map on load
document.addEventListener("DOMContentLoaded", function() {
  let map_spec = "js/map_chloropleth_anime_popularity_2025.vg.json";
  vegaEmbed("#world-map", map_spec, {mode: "vega-lite"});
});

// Map filter logic
document.getElementById("map-selection").addEventListener("change", function() {
    const year = this.value;
    let map_spec = `js/map_chloropleth_anime_popularity_${year}.vg.json`
    vegaEmbed("#world-map", map_spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
});

// Trends graph setup
document.addEventListener("DOMContentLoaded", function() {
  let trends_spec = "js/line-chart-anime-trends.vg.json";
  vegaEmbed("#trends-chart", trends_spec, {mode: "vega-lite"});
});

document.addEventListener("DOMContentLoaded", function() {
  let trends_spec = "js/anime-genre-popularity.vg.json";
  vegaEmbed("#genre-chart", trends_spec, {mode: "vega-lite"});
});

document.addEventListener("DOMContentLoaded", function() {
  let trends_spec = "js/scatter-chart-anime.vg.json";
  vegaEmbed("#genre-rating-chart", trends_spec, {mode: "vega-lite"});
});

document.addEventListener("DOMContentLoaded", function() {
  let trends_spec = "js/map-pie-chart.vg.json";
  vegaEmbed("#age-gender-charts", trends_spec, {mode: "vega-lite"});
});