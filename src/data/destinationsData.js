/* ✅ 16 IMAGES IMPORT */
import d1 from "../assets/d1.jpg";  import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";  import d4 from "../assets/d4.jpg";
import d5 from "../assets/d5.jpg";  import d6 from "../assets/d6.jpg";
import d7 from "../assets/d7.jpg";  import d8 from "../assets/d8.jpg";
import d9 from "../assets/d9.jpg";  import d10 from "../assets/d10.jpg";
import d11 from "../assets/d11.jpg"; import d12 from "../assets/d12.jpg";
import d13 from "../assets/d13.jpg"; import d14 from "../assets/d14.jpg";
import d15 from "../assets/d15.jpg"; import d16 from "../assets/d16.jpg";

export const destinationsData = [
  // --- NARAN (d1 - d4) ---
  { id: 1, title: "Lake Saif-ul-Malook", area: "Naran", meta: "Lake of Fairies", duration: "1 Day", img: d1 },
  { id: 2, title: "Babusar Top", area: "Naran", meta: "Mountain Pass View", duration: "1 Day", img: d2 },
  { id: 3, title: "Lulusar Lake", area: "Naran", meta: "Serene Alpine Lake", duration: "1 Day", img: d3 },
  { id: 4, title: "Ansoo Lake", area: "Naran", meta: "Teardrop Trek", duration: "3 Days", img: d4 },

  // --- SWAT (d5 - d8) ---
  { id: 5, title: "Malam Jabba", area: "Swat", meta: "Ski & Zipline", duration: "2 Days", img: d5 },
  { id: 6, title: "Mahodand Lake", area: "Swat", meta: "Boating & Fishing", duration: "1 Day", img: d6 },
  { id: 7, title: "Kalam Valley", area: "Swat", meta: "Riverside View", duration: "2 Days", img: d7 },
  { id: 8, title: "White Palace", area: "Swat", meta: "Royal Heritage", duration: "1 Day", img: d8 },

  // --- SKARDU (d9 - d12) ---
  { id: 9, title: "Shangrila Resort", area: "Skardu", meta: "Heart Lake", duration: "1 Day", img: d9 },
  { id: 10, title: "Deosai Plains", area: "Skardu", meta: "Land of Giants", duration: "2 Days", img: d10 },
  { id: 11, title: "Cold Desert", area: "Skardu", meta: "Katpana Dunes", duration: "1 Day", img: d11 },
  { id: 12, title: "Upper Kachura", area: "Skardu", meta: "Boating & Hike", duration: "1 Day", img: d12 },

  // --- HUNZA (d13 - d16) ---
  { id: 13, title: "Passu Cones", area: "Hunza", meta: "Cathedral Peaks", duration: "2 Days", img: d13 },
  { id: 14, title: "Attabad Lake", area: "Hunza", meta: "Turquoise Water", duration: "1 Day", img: d14 },
  { id: 15, title: "Altit Fort", area: "Hunza", meta: "Historic Landmark", duration: "1 Day", img: d15 },
  { id: 16, title: "Eagle's Nest", area: "Hunza", meta: "Sunset Point", duration: "1 Day", img: d16 },
];

export const areaToSlug = (area) => area ? area.toLowerCase() : "";