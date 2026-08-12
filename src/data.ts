import { Project, ShortContent, ServiceBlock, ExperienceStat, SocialLink } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "brahmos",
    name: "ANTHROPIC",
    category: "AI Business Analysis",
    year: "2024",
    description: "Sleek tactical defense engineering and supersonic missile aerodynamics visualized with high-contrast motion graphic overlays and dark cinematic atmosphere.",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1200", // Dark rocky tactical mountain ridge
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781203350/Anthropic_vtavab.mp4",
    tags: ["Director of Editing", "Aerodynamics Sim", "Tactical Overlays"]
  },
  {
    id: "us-debt-crisis",
    name: "PALANTIR",
    category: "Defense Technology Documentary",
    year: "2025",
    description: "An editorial analysis of interest rates, monetary sovereign debt ceilings, and global market systems told through minimalist charts.",
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=1200", // Minimalist dark classical columns
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781205581/Palantir_rdo93o.mp4",
    tags: ["Data Visualization", "Principal Editor", "3D Animatic"]
  },
  {
    id: "coal-gasification",
    name: "THORIUM",
    category: "Nuclear Energy Documentary",
    year: "2024",
    description: "Translating intricate physical reactions, heating complexes, and industrial environmental systems into beautifully lit technical schematics.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200", // Sparks blast furnace
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781285297/FA24_1_hwg62o.mp4",
    tags: ["3D Camera Tracking", "Fluid Simulation", "Color Styling"]
  },
  {
    id: "energy-security",
    name: "IBM Animation",
    category: "IBM Revenue and Computer Supply",
    year: "2025",
    description: "An investigative documentary exploring national power grids, uranium reserves, and sovereign energy resilience under global climate stress.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1200", // Misty power transformer environment
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781462594/1755715607714_d3ymyt.mp4",
    tags: ["Cinematic Grade", "Spatial Map Overlays", "Sound Scapes"]
  },
  {
    id: "map-animation-reel",
    name: "EL NIÑO",
    category: "Climate Map Animation",
    year: "2025",
    description: "Dynamic maps tracking shipping lanes, critical pinch points, mountain battlegrounds, and changing boundaries over absolute space.",
    image: "MOTION_GLOBE", // Will replace in code with the generated motion_globe path
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781288404/A22_new_zqxnsg.mp4",
    tags: ["Orthographic Projection", "Cartography", "3D Dem Terrain"]
  },
  {
    id: "motion-design-reel",
    name: "War Map Animation",
    category: "Geopolitical Visualization",
    year: "2025",
    description: "An abstract exploration of physical material textures, glass refraction, liquid metal flow, and custom typography titles.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200", // Minimal monochrome curved geometry structure
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1781462296/war_map_qa7cf3.mp4",
    tags: ["Vray Textures", "Kinetic Typography", "Title Sequence"]
  }
];

export const SHORTS: ShortContent[] = [
  {
    id: "communication-shorts",
    title: "COMMUNICATION SHORTS",
    category: "COMMUNICATION",
    description: "Practical communication techniques, persuasion frameworks and real-world speaking strategies designed to improve clarity, confidence and audience engagement.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1784397414/comminication-20_December-_1_v8c361.mp4",
    duration: "0:58"
  },
  {
    id: "storytelling-shorts",
    title: "STORYTELLING SHORTS",
    category: "STORYTELLING",
    description: "Narrative structure, emotional pacing and storytelling principles that transform complex ideas into highly engaging short-form content.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1786470138/Storytellar1_1feb_V1_1_pfph0r.mp4",
    duration: "0:52"
  },
  {
    id: "business-shorts",
    title: "BUSINESS SHORTS",
    category: "BUSINESS",
    description: "Business insights, startup lessons, marketing psychology and strategic thinking presented through cinematic motion graphics.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    video: "https://res.cloudinary.com/dvb4j8sfk/video/upload/v1786470739/VI_AD_12june_V_evbplv.mp4",
    duration: "0:45"
  }
];

export const SERVICES: ServiceBlock[] = [
  {
    id: "doc-editing",
    title: "DOCUMENTARY EDITING",
    tagline: "Research-driven pacing & storytelling.",
    description: "Architecting raw footage into high-end dramatic tension. Specializing in long-form narratives, multi-camera synchronized editing, editorial structure, and sound design layers designed for international audiences and television distribution.",
    skills: ["Narrative Pacing", "Sound Architecture", "Footage Sifting", "Tension Building"]
  },
  {
    id: "motion-design",
    title: "MOTION DESIGN",
    tagline: "Lucid data visualization & abstract concept modeling.",
    description: "Converting complicated macroeconomic trends and military structures into beautiful, sleek, highly engaging motion graphics. Premium 3D renders that capture viewer attention within 2 seconds of watch duration.",
    skills: ["3D Physics Simulation", "Macroeconomic charts", "Dynamic title typography", "X-Particle Simulations"]
  },
  {
    id: "map-animation",
    title: "MAP ANIMATION",
    tagline: "Global geopolitics & territorial battlegrounds.",
    description: "State-of-the-art interactive map design utilizing localized geodata, physical digital elevation models (DEM), flight routes, and maritime shipping lines to build immersive world-scale explanations.",
    skills: ["Dem Terrain Modelling", "Satellite Texture Projection", "Tactical Overlays", "Historical Timelines"]
  }
];

export const STATISTICS: ExperienceStat[] = [
  {
    id: "views",
    metric: "100+",
    label: "VIDEOS EDITED",
    description: "Documentaries, explainers, shorts and long-form storytelling projects."
  },
  {
    id: "projects",
    metric: "150+",
    label: "PROJECTS DELIVERED",
    description: "From documentary editing to motion graphics and visual storytelling."
  },
  {
    id: "experience",
    metric: "1.5 Years",
    label: "PROFESSIONAL EXPERIENCE",
    description: "Building retention-focused content for digital audiences."
  },
  {
    id: "motion-hours",
    metric: "",
    label: "MOTION DESIGN\n& MAP ANIMATION",
    description: "Data visualization, cartography, motion graphics and documentary visuals."
  }
];

export const SOCIALS: SocialLink[] = [
  {
    id: "youtube",
    platform: "YouTube",
    handle: "@shekharofficial8780",
    url: "https://www.youtube.com/@shekharofficial8780"
  },
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@shekhar.cr7",
    url: "https://www.instagram.com/shekhar.cr7/"
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    handle: "Chandrashekhar Yadav",
    url: "https://www.linkedin.com/in/chandrashekhar-yadav-5290342a6"
  },
  {
    id: "twitter",
    platform: "X / Twitter",
    handle: "editingclub",
    url: "Coming Soon"
  },
  {
    id: "upwork",
    platform: "UPWORK",
    handle: "Chandrashekhar",
    url: "https://www.upwork.com/freelancers/~01c7800aa231d056b2"
  }
];
