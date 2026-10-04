export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  year: string;
  builtUp: string;
  typology: string;
  award?: string;
  description: string;
  shortDesc: string;
  coverImage: string;
  images: string[];
  videoUrl?: string;
  category: "flagship" | "compact" | "heritage" | "interior";
  tags: string[];
  featured?: boolean;
}

const BASE = "/assets/projects/architecture_swath_project_assets_sources";

export const projects: ProjectItem[] = [
  {
    id: "house-california-layout",
    title: "House at California Layout",
    subtitle: "FOAID 2022 Gold Award Winner",
    location: "Bengaluru, Karnataka",
    year: "2022",
    builtUp: "6,800 sq ft",
    typology: "Luxury Courtyard Residence",
    award: "FOAID 2022 — Gold Award, Residential Category",
    description:
      "A monumental courtyard residence that fuses Kerala Vastu principles with a contemporary material palette of exposed concrete, teak, and corten steel. The home is organized around a double-height central courtyard that draws light deep into the plan, anchoring all living zones around a symbolic water body. Elevated terraces cascade outward, creating a layered spatial experience that blurs interior and exterior. The project won the prestigious FOAID 2022 Gold Award in the Residential Category.",
    shortDesc:
      "FOAID 2022 Gold Award winning courtyard villa with Kerala Vastu axis and double-height living.",
    coverImage: `${BASE}/01_House_at_California_Layout/downloaded_images/001_house_at_california_layout.jpg`,
    images: Array.from(
      { length: 24 },
      (_, i) =>
        `${BASE}/01_House_at_California_Layout/downloaded_images/${String(i + 1).padStart(3, "0")}_house_at_california_layout.jpg`
    ),
    videoUrl: "/assets/projects/videos/House at California Layout Buildofy.mp4",
    category: "flagship",
    tags: ["Courtyard", "Kerala Vastu", "FOAID Gold", "Corten Steel", "Teak"],
    featured: true,
  },
  {
    id: "project-n170",
    title: "Project N170",
    subtitle: "Volume Zero Hot 100 #75",
    location: "Bengaluru, Karnataka",
    year: "2023",
    builtUp: "3,200 sq ft",
    typology: "Compact Luxury Villa",
    award: "Volume Zero Hot 100 — #75 Global Ranking",
    description:
      "An exercise in spatial efficiency on a constrained 30'×50' plot, Project N170 demonstrates how bespoke luxury can be achieved within a compact urban footprint. The design employs a vertical stacking strategy with double-height volumes that create perceived spaciousness. Custom joinery, stone-clad walls, and a private rooftop deck transform a seemingly impossible brief into a genuinely aspirational home. Featured by Volume Zero in their annual Hot 100 global architecture ranking.",
    shortDesc:
      "Volume Zero Hot 100 — compact 30×50 luxury villa that defies its footprint with vertical spatial mastery.",
    coverImage: `${BASE}/02_Project_N170/downloaded_images/001_project_n170.jpg`,
    images: Array.from(
      { length: 26 },
      (_, i) =>
        `${BASE}/02_Project_N170/downloaded_images/${String(i + 1).padStart(3, "0")}_project_n170.jpg`
    ),
    category: "compact",
    tags: ["Volume Zero", "30x50 Plot", "Compact Villa", "Double Height"],
    featured: true,
  },
  {
    id: "house-neeranjanam",
    title: "House Neeranjanam",
    subtitle: "Water · Light · Vastu",
    location: "Bengaluru, Karnataka",
    year: "2021",
    builtUp: "5,400 sq ft",
    typology: "Vastu-Compliant Residence",
    description:
      "Neeranjanam — meaning 'water ritual' — is a home conceived around the philosophy of elemental harmony. Water features are woven through the ground and first floors, creating natural cooling corridors and meditative focal points. The architecture strictly follows Kerala Vastu Shastra in its orientation, room proportioning, and threshold design, while the material palette of polished stone, aged teak, and hand-plastered lime walls delivers a timeless, tactile warmth.",
    shortDesc:
      "Vastu-compliant residence where water is woven through every floor as a cooling and meditative element.",
    coverImage: `${BASE}/03_House_Neeranjanam/downloaded_images/001_house_neeranjanam.jpg`,
    images: Array.from(
      { length: 19 },
      (_, i) =>
        `${BASE}/03_House_Neeranjanam/downloaded_images/${String(i + 1).padStart(3, "0")}_house_neeranjanam.jpg`
    ),
    category: "flagship",
    tags: ["Kerala Vastu", "Water Features", "Lime Plaster", "Stone"],
    featured: true,
  },
  {
    id: "abhyudaya",
    title: "Abhyudaya",
    subtitle: "Corten · Steel · Spirit",
    location: "Bengaluru, Karnataka",
    year: "2023",
    builtUp: "4,100 sq ft",
    typology: "Pooja-Centric Residence",
    description:
      "Abhyudaya means 'rise' — and this home rises from its spiritual core. The design revolves around an elevated Pooja room at the geometric centre of the plan, from which all living spaces radiate outward. The façade is defined by a dramatic Corten steel Jaali screen that filters harsh western light into warm, dappled patterns throughout the day. A video walkthrough of this project was featured on Buildofy, garnering significant industry attention.",
    shortDesc:
      "Pooja-centric villa with a dramatic Corten steel Jaali façade and spiritual spatial planning.",
    coverImage: `${BASE}/04_Abhyudaya/downloaded_images/001_abhyudaya.jpg`,
    images: Array.from(
      { length: 32 },
      (_, i) =>
        `${BASE}/04_Abhyudaya/downloaded_images/${String(i + 1).padStart(3, "0")}_abhyudaya.jpg`
    ),
    videoUrl: "/assets/projects/videos/Abhyudaya Buildofy.mp4",
    category: "flagship",
    tags: ["Corten Steel", "Jaali", "Pooja-Centric", "Buildofy"],
    featured: false,
  },
  {
    id: "mr-balas-residence",
    title: "Mr. Bala's Residence",
    subtitle: "Material Craft · Precision Detail",
    location: "Bengaluru, Karnataka",
    year: "2021",
    builtUp: "3,800 sq ft",
    typology: "Custom Family Residence",
    description:
      "A refined family home where every surface becomes an opportunity for material craft. Exposed brick is juxtaposed with smooth stone cladding; warm walnut joinery contrasts polished concrete floors. The open-plan ground floor encourages fluid family living while the upper floors retreat into private sanctuary bedrooms. Custom steel railings, handcrafted by local artisans, run continuously through all floors as a unifying design element.",
    shortDesc:
      "Material-rich family residence with exposed brick, walnut joinery, and continuous hand-crafted steel railings.",
    coverImage: `${BASE}/05_Mr_Balas_Residence/downloaded_images/001_mr_balas_residence.jpg`,
    images: Array.from(
      { length: 16 },
      (_, i) =>
        `${BASE}/05_Mr_Balas_Residence/downloaded_images/${String(i + 1).padStart(3, "0")}_mr_balas_residence.jpg`
    ),
    category: "compact",
    tags: ["Exposed Brick", "Walnut Joinery", "Craft", "Custom Metalwork"],
    featured: false,
  },
  {
    id: "dr-niyas-residence",
    title: "Dr. Niyas Residence",
    subtitle: "Calm · Clarity · Contemporary",
    location: "Bengaluru, Karnataka",
    year: "2022",
    builtUp: "3,500 sq ft",
    typology: "Contemporary Residence",
    description:
      "Designed for a medical professional who demanded both efficiency and serenity, this residence prioritises clean geometry and carefully controlled natural light. The north-facing glazed living room becomes a tranquil sanctuary, while compact utility zones are precisely engineered. A double-volume entry foyer creates an immediate sense of arrival, and a private study and consultation room on the ground floor supports the owner's professional needs without compromising domestic privacy.",
    shortDesc:
      "Clean-geometry contemporary home for a physician, balancing professional utility with domestic tranquility.",
    coverImage: `${BASE}/06_Dr_Niyas_Residence/downloaded_images/001_dr_niyas_residence.jpg`,
    images: Array.from(
      { length: 12 },
      (_, i) =>
        `${BASE}/06_Dr_Niyas_Residence/downloaded_images/${String(i + 1).padStart(3, "0")}_dr_niyas_residence.jpg`
    ),
    category: "compact",
    tags: ["Contemporary", "Clean Geometry", "Natural Light", "Study"],
    featured: false,
  },
  {
    id: "into-the-woods",
    title: "Into the Woods",
    subtitle: "Topography · Timber · Terrain",
    location: "Kerala / South India",
    year: "2024",
    builtUp: "2,800 sq ft",
    typology: "Hillside Retreat",
    description:
      "A hillside retreat that negotiates a steeply sloping site through a series of stepped pavilions connected by open decks. The structure uses local timber framing and laterite stone plinths to anchor lightly into the landscape rather than imposing upon it. Sweeping views of the surrounding forest canopy are framed through full-height glazed openings, while deep overhanging eaves protect from monsoon rains. A project that redefines the relationship between habitation and ecology.",
    shortDesc:
      "Stepped hillside retreat in laterite and timber, nestled into a forest slope with panoramic canopy views.",
    coverImage: `${BASE}/08_Into_the_Woods/downloaded_images/001_into_the_woods.jpg`,
    images: Array.from(
      { length: 8 },
      (_, i) =>
        `${BASE}/08_Into_the_Woods/downloaded_images/${String(i + 1).padStart(3, "0")}_into_the_woods.jpg`
    ),
    category: "heritage",
    tags: ["Hillside", "Timber", "Laterite", "Ecology", "Kerala"],
    featured: false,
  },
];

export const stats = [
  { value: "8+", label: "Years of Practice" },
  { value: "137+", label: "High-Res Assets" },
  { value: "7", label: "Landmark Projects" },
  { value: "2", label: "National Awards" },
];
