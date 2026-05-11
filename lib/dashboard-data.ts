export type ProjectStatus = "Active" | "Hold" | "Payment Due";

export const dashboardStats = [
  { label: "Managed Clients", value: "156", change: "+12 this month" },
  { label: "Active Projects", value: "132", change: "84.6% portfolio health" },
  { label: "Payment Due", value: "18", change: "Auto reminders enabled" },
  { label: "Reports Uploaded", value: "428", change: "Excel to graph pipeline" }
];

export const clientProjects: {
  name: string;
  city: string;
  package: string;
  status: ProjectStatus;
  billing: string;
  seo: number;
  posts: number;
  blogs: number;
}[] = [
  {
    name: "Urban Dental Studio",
    city: "Chandigarh",
    package: "Growth",
    status: "Active",
    billing: "Paid till 28 May",
    seo: 18,
    posts: 42,
    blogs: 6
  },
  {
    name: "Royal Kitchens",
    city: "Mohali",
    package: "Premium",
    status: "Payment Due",
    billing: "Due today",
    seo: -4,
    posts: 31,
    blogs: 4
  },
  {
    name: "FitCore Gym",
    city: "Panchkula",
    package: "Dominator",
    status: "Active",
    billing: "Paid till 05 Jun",
    seo: 27,
    posts: 58,
    blogs: 8
  },
  {
    name: "NorthStar Immigration",
    city: "Ludhiana",
    package: "Premium",
    status: "Hold",
    billing: "Overdue 9 days",
    seo: -11,
    posts: 12,
    blogs: 2
  },
  {
    name: "Aura Salon",
    city: "Delhi",
    package: "Growth",
    status: "Active",
    billing: "Paid till 18 Jun",
    seo: 13,
    posts: 36,
    blogs: 5
  }
];

export const rankingTrend = [
  { month: "Jan", rank: 48, calls: 18 },
  { month: "Feb", rank: 41, calls: 26 },
  { month: "Mar", rank: 34, calls: 39 },
  { month: "Apr", rank: 27, calls: 52 },
  { month: "May", rank: 19, calls: 74 },
  { month: "Jun", rank: 11, calls: 96 }
];

export const uploadQueue = [
  "SEO ranking sheet",
  "Google Business Profile insights",
  "Meta Ads leads report",
  "Social media post calendar"
];

export const clientFeed = [
  { title: "Payment Pending", copy: "Your May invoice is pending. Pay now to avoid service interruption.", tone: "alert" },
  { title: "Social Media Posts Done", copy: "31 posts and reels published this month across Instagram, Facebook and YouTube.", tone: "success" },
  { title: "Google Ranking Improved", copy: "Primary keyword moved from position 27 to 19 in the latest report.", tone: "success" },
  { title: "Recent Blogs", copy: "4 SEO blogs are live and indexed for local search visibility.", tone: "neutral" }
];

export const offers = [
  "Festival reel campaign package for Diwali and wedding season brands",
  "Google Business Profile optimization sprint for local service businesses",
  "Founder podcast shoot offer for clinics, institutes and consultants"
];
