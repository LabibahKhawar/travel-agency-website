// src/data/tourPlannerData.js
import hunzaHero from "../assets/hunza.jpg";
import skarduHero from "../assets/skardu.jpg";
import swatHero from "../assets/swat.jpg";
import naranHero from "../assets/naran.jpg";

// ✅ AREAS
export const AREAS = ["Hunza", "Skardu", "Swat", "Naran"];

export const areaHeroImage = (area) => {
  if (area === "Hunza") return hunzaHero;
  if (area === "Skardu") return skarduHero;
  if (area === "Swat") return swatHero;
  return naranHero;
};

// ✅ Area Descriptions
export const areaDescriptions = {
  Hunza: "Hunza - Pakistan's Switzerland, breathtaking mountains and clear water lakes",
  Skardu: "Skardu - Roof of the World, land of Shangrila and Kachura lakes",
  Swat: "Swat - Switzerland of the East, lush green valleys and historical sites",
  Naran: "Naran - Heart of Kagan Valley, Saif-ul-Malook Lake and Babusar Top",
};

// ✅ Hotel Data (kept as is)
export const hotelsByArea = {
  Hunza: [
    { name: "Hunza Serena Inn", notes: "Family-friendly, clean, great views", rating: 4.7, priceTier: "premium", comfort: 9, bestFor: ["family", "couple"] },
    { name: "Eagle Nest Hotel", notes: "Scenic viewpoint, premium stay", rating: 4.5, priceTier: "mid", comfort: 8, bestFor: ["friends", "couple", "family"] },
    { name: "Budget Hunza Lodge", notes: "Clean & affordable", rating: 4.1, priceTier: "budget", comfort: 7, bestFor: ["friends", "family"] },
  ],
  Skardu: [
    { name: "Serena Shigar Fort", notes: "Luxury heritage stay", rating: 4.8, priceTier: "premium", comfort: 9, bestFor: ["couple", "family"] },
    { name: "Skardu View Point Hotel", notes: "Good mid-range option", rating: 4.4, priceTier: "mid", comfort: 8, bestFor: ["family", "friends"] },
    { name: "Budget Skardu Inn", notes: "Best for tight budget", rating: 4.0, priceTier: "budget", comfort: 7, bestFor: ["friends"] },
  ],
  Swat: [
    { name: "Swat Serena Hotel", notes: "Comfortable family stay", rating: 4.6, priceTier: "premium", comfort: 9, bestFor: ["family"] },
    { name: "Malam Jabba Resort", notes: "Best for views & activities", rating: 4.5, priceTier: "mid", comfort: 8, bestFor: ["friends", "couple"] },
    { name: "Budget Swat Hotel", notes: "Economy option", rating: 4.0, priceTier: "budget", comfort: 7, bestFor: ["family", "friends"] },
  ],
  Naran: [
    { name: "Pine Park Naran", notes: "Nice views & location", rating: 4.4, priceTier: "mid", comfort: 8, bestFor: ["family", "friends"] },
    { name: "Arcadian Riverside", notes: "Premium vibe & riverside", rating: 4.6, priceTier: "premium", comfort: 9, bestFor: ["couple", "family"] },
    { name: "Budget Naran Lodge", notes: "Affordable stay", rating: 4.0, priceTier: "budget", comfort: 7, bestFor: ["friends"] },
  ],
};

// ✅ Activities
export const activitiesByArea = {
  Hunza: ["Baltit Fort visit", "Altit Fort + Royal Gardens", "Attabad Lake boating", "Passu Cones viewpoint"],
  Skardu: ["Shangrila Lake Visit", "Upper Kachura Exploration", "Shigar Valley Tour", "Deosai Trip (Seasonal)"],
  Swat: ["Malam Jabba Chairlift", "Kalam Valley Drive", "Mahodand Lake Tour", "Local food walk"],
  Naran: ["Saif-ul-Malook Lake", "Babusar Top (Seasonal)", "River Rafting", "Local bazaar walk"],
};

// ✅ Destinations
export const destinationsByArea = {
  Hunza: ["Karimabad", "Attabad Lake", "Passu", "Altit Fort"],
  Skardu: ["Shigar Valley", "Upper Kachura", "Skardu Bazaar", "Shangrila"],
  Swat: ["Mingora", "Fizagat Park", "White Palace", "Malam Jabba"],
  Naran: ["Lulusar Lake", "Naran Bazaar", "Kagan Valley", "Saif-ul-Malook"],
};

// ✅ Routes
export const routesByArea = {
  Hunza: {
    path: ["Islamabad", "Mansehra", "Besham", "Dasu", "Chilas", "Gilgit", "Hunza"],
    returnPath: ["Hunza", "Gilgit", "Chilas", "Dasu", "Besham", "Mansehra", "Islamabad"],
    notes: "Start early, keep buffer for road work.",
    travelHoursOneWay: 18,
    safety: 8,
    roadQuality: 7,
    comfortStops: 7,
  },
  Skardu: {
    path: ["Islamabad", "Mansehra", "Besham", "Dasu", "Chilas", "Jaglot", "Skardu"],
    returnPath: ["Skardu", "Jaglot", "Chilas", "Dasu", "Besham", "Mansehra", "Islamabad"],
    notes: "Long journey. Recommend 6+ days for comfort.",
    travelHoursOneWay: 20,
    safety: 7,
    roadQuality: 6,
    comfortStops: 7,
  },
  Swat: {
    path: ["Islamabad", "Mardan", "Malakand", "Mingora", "Swat"],
    returnPath: ["Swat", "Mingora", "Malakand", "Mardan", "Islamabad"],
    notes: "Best for 3–6 days trips, easy road.",
    travelHoursOneWay: 5,
    safety: 9,
    roadQuality: 9,
    comfortStops: 9,
  },
  Naran: {
    path: ["Islamabad", "Abbottabad", "Balakot", "Kagan", "Naran"],
    returnPath: ["Naran", "Kagan", "Balakot", "Abbottabad", "Islamabad"],
    notes: "Seasonal road (snow in winter).",
    travelHoursOneWay: 7,
    safety: 8,
    roadQuality: 8,
    comfortStops: 8,
  },
};

// ============================
// ENHANCED ENGINE WITH DATABASE INTEGRATION
// ============================
const budgetWeight = { budget: 0, mid: 1, premium: 2 };
const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const normalizeList = (arr) =>
  (arr || []).map((x) => (typeof x === "string" ? { name: x } : x));

const normalizeHotels = (arr) =>
  (arr || []).map((h) => ({
    ...h,
    rating: h.rating ?? 4.2,
    priceTier: h.priceTier ?? "mid",
    comfort: h.comfort ?? 7,
    bestFor: h.bestFor ?? ["family", "friends", "couple", "corporate"],
  }));

const scoreBudgetMatch = (tier, userBudget) => {
  const diff = Math.abs(budgetWeight[tier] - budgetWeight[userBudget]);
  if (diff === 0) return 1;
  if (diff === 1) return 0.65;
  return 0.25;
};

const scoreGroupMatch = (bestForArr, groupType) =>
  bestForArr?.includes(groupType) ? 1 : 0.6;

const scoreDaysFit = (pkgDays, userDays) => {
  const dist = Math.abs(pkgDays - userDays);
  return clamp(1 - dist * 0.15, 0.4, 1);
};

const scoreRouteFit = (route, userDays) => {
  if (!route) return 0.6;
  const base = (route.safety * 0.45 + route.roadQuality * 0.35 + route.comfortStops * 0.2) / 10;
  const longTravel = route.travelHoursOneWay >= 16;
  const daysPenalty = longTravel && userDays < 6 ? 0.7 : 1;
  return clamp(base * daysPenalty, 0.3, 1);
};

// ✅ NEW: Function to normalize database packages for recommendation engine
export const normalizePackageForRecommendation = (pkg) => {
  // Extract area from title or location
  const title = pkg.title || "";
  const location = pkg.location || "";
  
  let area = "Hunza"; // default
  if (title.includes("Hunza") || location.includes("Hunza")) area = "Hunza";
  else if (title.includes("Skardu") || location.includes("Skardu")) area = "Skardu";
  else if (title.includes("Swat") || location.includes("Swat")) area = "Swat";
  else if (title.includes("Naran") || location.includes("Naran")) area = "Naran";
  
  // Extract budget level from title or price
  let budget = "mid"; // default
  if (title.includes("Budget") || title.includes("budget")) budget = "budget";
  else if (title.includes("Premium") || title.includes("premium")) budget = "premium";
  else if (title.includes("Mid") || title.includes("mid")) budget = "mid";
  
  // Extract group type from title
  let type = "family"; // default
  if (title.includes("Family") || title.includes("family")) type = "family";
  else if (title.includes("Friends") || title.includes("friends")) type = "friends";
  else if (title.includes("Couple") || title.includes("couple")) type = "couple";
  else if (title.includes("Corporate") || title.includes("corporate")) type = "corporate";
  
  // Extract days
  const daysMatch = title.match(/\b(\d+)\s*days?\b/i) || 
                   title.match(/\b(\d+)\s*d\b/i) ||
                   [null, pkg.duration_days || 5];
  const days = parseInt(daysMatch[1]) || 5;
  
  return {
    id: pkg.id,
    title: pkg.title,
    area,
    days,
    type,
    budget,
    description: pkg.description || "",
    price: pkg.price_pkr || 0,
    location: pkg.location || area,
    rating: pkg.rating || 4.0,
    highlights: pkg.highlights || [],
    inclusions: pkg.inclusions || [],
    image: pkg.images?.[0] || "",
  };
};

// ✅ NEW: Enhanced recommendation with database integration
export const recommendPackageAdvanced = async ({ area, days, groupType, budget, supabaseClient = null }) => {
  // Get local data
  const hotels = hotelsByArea[area] || [];
  const activities = activitiesByArea[area] || [];
  const dests = destinationsByArea[area] || [];
  const route = routesByArea[area];
  
  // Try to fetch packages from database if supabaseClient is provided
  let dbPackages = [];
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("packages")
        .select("*");
      
      if (!error && data) {
        dbPackages = data.map(normalizePackageForRecommendation);
      }
    } catch (err) {
      console.log("Could not fetch packages from database:", err);
    }
  }
  
  // Fallback to static packages if database is empty
  let candidates = dbPackages;
  if (candidates.length === 0) {
    // Use static packages as fallback
    candidates = [
      {
        id: "hunza-5-mid-family",
        title: "Hunza Explorer (5 Days) — Family Mid",
        area: "Hunza",
        days: 5,
        type: "family",
        budget: "mid",
      },
      {
        id: "hunza-6-prem-couple",
        title: "Hunza Premium Escape (6 Days) — Couple Premium",
        area: "Hunza",
        days: 6,
        type: "couple",
        budget: "premium",
      },
      {
        id: "skardu-7-prem-couple",
        title: "Skardu Premium Escape (7 Days) — Couple Premium",
        area: "Skardu",
        days: 7,
        type: "couple",
        budget: "premium",
      },
      {
        id: "swat-4-budget-friends",
        title: "Swat Budget Adventure (4 Days) — Friends Budget",
        area: "Swat",
        days: 4,
        type: "friends",
        budget: "budget",
      },
      {
        id: "naran-4-mid-family",
        title: "Naran Nature Trip (4 Days) — Family Mid",
        area: "Naran",
        days: 4,
        type: "family",
        budget: "mid",
      },
    ];
  }
  
  // Filter candidates by area
  candidates = candidates.filter((p) => p.area === area);
  if (!candidates.length) return null;

  const routeScore = scoreRouteFit(route, days);

  const scored = candidates.map((p) => {
    const daysScore = scoreDaysFit(p.days, days);
    const groupScore = p.type === groupType ? 1 : 0.5;
    const budgetScore = scoreBudgetMatch(p.budget, budget);

    const total = daysScore * 0.35 + groupScore * 0.3 + budgetScore * 0.25 + routeScore * 0.1;

    return {
      ...p,
      _scores: {
        total: Number(total.toFixed(3)),
        daysScore: Number(daysScore.toFixed(2)),
        groupScore: Number(groupScore.toFixed(2)),
        budgetScore: Number(budgetScore.toFixed(2)),
        routeScore: Number(routeScore.toFixed(2)),
      },
      matchPercentage: Math.round(total * 100),
    };
  });

  scored.sort((a, b) => b._scores.total - a._scores.total);
  const bestPkg = scored[0];

  const normalizeHotelsForDisplay = (hotels) =>
    hotels.map((h) => ({
      ...h,
      rating: h.rating ?? 4.2,
      priceTier: h.priceTier ?? "mid",
      comfort: h.comfort ?? 7,
    }));

  const hotelPick = {
    primary: normalizeHotelsForDisplay(hotels).slice(0, 2),
    alternative: normalizeHotelsForDisplay(hotels).slice(2, 4),
  };

  const plan = generatePlan({ days, route, activities, dests, groupType, budget });

  const reasons = [
    `Days match: ${bestPkg._scores.daysScore}/1 (${bestPkg.days} days)`,
    `Group suitability: ${bestPkg._scores.groupScore}/1 (${groupType})`,
    `Budget match: ${bestPkg._scores.budgetScore}/1 (${budget})`,
    `Route comfort: ${bestPkg._scores.routeScore}/1`,
    `Overall confidence: ${plan.confidence}`,
  ];

  return {
    bestPkg,
    route,
    hotels: normalizeHotelsForDisplay(hotels),
    activities,
    dests,
    hotelPick,
    plan,
    reasons,
    matchPercentage: bestPkg.matchPercentage,
    topAlternatives: scored.slice(1, 3),
    areaDescription: areaDescriptions[area],
  };
};

// ✅ Plan Generation
export const generatePlan = ({ days, route, activities, dests, groupType, budget }) => {
  const A = normalizeList(activities);
  const D = normalizeList(dests);

  const longTravel = route?.travelHoursOneWay >= 16;

  const baseActsPerDay = groupType === "family" ? 1.5 : groupType === "couple" ? 2 : 2.5;
  const activitiesPerDay = days <= 3 ? 2 : days <= 5 ? baseActsPerDay + 0.5 : baseActsPerDay;

  const usableDays = Math.max(1, days - 1);
  const chosenActs = A.slice(0, clamp(usableDays * activitiesPerDay, 3, 12));
  const chosenDests = D.slice(0, clamp(days * 2, 4, 12));

  const itinerary = [];
  let actIdx = 0;
  let destIdx = 0;

  for (let day = 1; day <= days; day++) {
    const isFirst = day === 1;
    const isLast = day === days;

    let dayType = "explore";
    if (isFirst) dayType = "travel-in";
    if (isLast) dayType = "travel-out";
    if (longTravel && day === 2) dayType = "buffer-rest";

    const dayActivities = [];
    const dayDests = [];

    if (dayType === "explore") {
      for (let i = 0; i < activitiesPerDay && actIdx < chosenActs.length; i++) {
        dayActivities.push(chosenActs[actIdx++]);
      }
      for (let i = 0; i < 2 && destIdx < chosenDests.length; i++) {
        dayDests.push(chosenDests[destIdx++].name);
      }
    } else if (dayType === "buffer-rest") {
      if (destIdx < chosenDests.length) dayDests.push(chosenDests[destIdx++].name);
      if (actIdx < chosenActs.length) dayActivities.push(chosenActs[actIdx++]);
    } else {
      if (destIdx < chosenDests.length) dayDests.push(chosenDests[destIdx++].name);
    }

    const vibe =
      dayType === "travel-in"
        ? "Travel and rest day - Hotel check-in and short walk"
        : dayType === "travel-out"
        ? "Return journey - Hotel checkout and souvenir shopping"
        : dayType === "buffer-rest"
        ? "Rest day - Light sightseeing and local culture"
        : "Full exploration day - Major sightseeing";

    const tips =
      dayType === "travel-in"
        ? "Arrive early, relax at hotel, evening walk"
        : dayType === "travel-out"
        ? "Checkout early in morning, pack lunch for journey"
        : dayType === "buffer-rest"
        ? "Don't wake up early, relax, try local food"
        : "Leave early in morning, carry water, take camera";

    itinerary.push({
      day,
      dayType,
      vibe,
      tips,
      destinations: dayDests,
      activities: dayActivities.map(a => ({
        name: a.name || a,
        duration: a.duration || "2-3 hours",
        cost: a.cost || "PKR 1000-2000",
      })),
    });
  }

  const confidence = clamp(
    0.6 +
      (budget === "premium" ? 0.08 : 0) +
      (days >= 4 ? 0.1 : 0) +
      (longTravel && days < 6 ? -0.15 : 0.05) +
      (groupType === "family" ? 0.05 : 0),
    0.5,
    0.95
  );

  const insights = [
    longTravel ? "Long travel route → Rest day added for comfort." : "Short travel → More time for activities.",
    `Optimized for your group: ${groupType}`,
    `Budget type: ${budget}`,
    `Daily activities: ~${activitiesPerDay.toFixed(1)} main activities/day`,
  ];

  return { itinerary, confidence: Number(confidence.toFixed(2)), insights };
};

// ✅ NEW: Save user preferences to localStorage
export const saveUserPreferences = ({ area, days, groupType, budget, recommendedPackageId }) => {
  const preferences = {
    area,
    days,
    groupType,
    budget,
    recommendedPackageId,
    timestamp: Date.now(),
  };
  
  localStorage.setItem('tourPlannerPreferences', JSON.stringify(preferences));
  localStorage.setItem('recommendedPackageId', recommendedPackageId);
  
  return preferences;
};

// ✅ NEW: Get saved user preferences
export const getUserPreferences = () => {
  try {
    const saved = localStorage.getItem('tourPlannerPreferences');
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

// ✅ NEW: Get recommended package ID
export const getRecommendedPackageId = () => {
  return localStorage.getItem('recommendedPackageId');
};

// ✅ Simple Recommendation (backward compatible)
export const recommendPackage = ({ area, days, groupType, budget }) => {
  const rec = recommendPackageAdvanced({ area, days, groupType, budget });
  return rec?.bestPkg || null;
};

