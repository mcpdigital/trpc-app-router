export const navlinks = [
  { title: "Dashboard", url: "/admin", role: "org:admin" },
  { title: "CRUD", url: "/crud", role: "" },

  // Add more placeholder links as needed
];

export const groupedLinks = [
  {
    title: "HTML & CSS",
    navlinks: [
      { title: "TW Gradients", url: "/twgrads", role: "" },
      { title: "ui-assets", url: "/ui-assets", role: "" },
    ],
    role: "",
  },
  {
    title: "OpenAI",
    navlinks: [
      { title: "GPT", url: "/gpt", role: "org:ai" },
      { title: "DALL-E", url: "/DALL-E", role: "org:ai" },
    ],
    role: "org:ai",
  },
  {
    title: "Clerk",
    navlinks: [
      { title: "Profile", url: "/profile", role: "org:member" },
      { title: "User", url: "/user", role: "org:member" },
    ],
    role: "org:ai",
  },
];
