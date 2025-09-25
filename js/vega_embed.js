document.addEventListener("DOMContentLoaded", function() {
  let map_spec = "js/map_chloropleth_anime_popularity_2025.vg.json";
  vegaEmbed("#world-map", map_spec, {mode: "vega-lite"});
});

document.getElementById("map-selection").addEventListener("change", function() {
    const year = this.value;
    let map_spec = `js/map_chloropleth_anime_popularity_${year}.vg.json`
    vegaEmbed("#world-map", map_spec, {mode: "vega-lite"}).then(console.log).catch(console.warn);
});

