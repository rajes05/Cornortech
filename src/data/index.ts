import { Testimonial, Stat, NavigationItem, FooterSection } from '@/types';

export const testimonials: Testimonial[] = [
  {
    quote: "The auto editing feature is like magic! I uploaded like 10 random clips from my trip and it put together a really nice summary video with music and everything. Saved me a ton of work!",
    author: "Sarah Johnson",
    role: "Content Creator",
    avatar: "/avatars/sarah-johnson.jpg"
  },
  {
    quote: "Had to write a review just for the templates. It's not just a bunch of cookie-cutter designs, either. I love that I can pick a classic, clean one or let the AI generate something totally unique for my project. Never starting from a blank screen again.",
    author: "Olivia Turner",
    role: "Video Editor",
    avatar: "/avatars/olivia-turner.jpg"
  },
  {
    quote: "It's super stable, never crashes mid-edit. The basic tools are all there and easy to find, trimming is easy, the controls actually make sense. Honestly just a solid tool that does the job perfectly.",
    author: "PixelPantry",
    role: "YouTube Creator",
    avatar: "/avatars/pixel-pantry.jpg"
  },
  {
    quote: "Wasn't sure what to expect from the image generator, but it totally surprised me. Got a custom background for my vlog in no time, and it actually looked awesome.",
    author: "Jayden_M",
    role: "Vlogger",
    avatar: "/avatars/jayden-m.jpg"
  }
];

export const stats: Stat[] = [
  { value: "100M+", label: "Downloads" },
  { value: "100K+", label: "Creators" },
  { value: "4.7", label: "App Store Ratings" },
  { value: "20+", label: "Languages" }
];

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    // scrollId:"hero",
  },
   {
    title: "Services",
    // scrollId:"services",
    children: [
      { title: "Degital Marketing", link: "#" },
      { title: "Web Development", link: "#" },
      { title: "App Development", link: "#" },
      { title: "Search Engine Optimization", link: "#" }
    ]
  },
  {
    title: "Courses",
    // scrollId:"courses",
    children: [
      { title: "Graphic Design", link: "#" },
      { title: "Machine Learning", link: "#" },
      { title: "Data Science", link: "#" },
      { title: "Motion Graphihc", link: "#" },
      { title: "MERN Stack", link: "#" },
      { title: "Spring Boot", link: "#" }
    ]
  },
  {
    title: "Our Works",
    // scrollId:"our-works"
    children: [
      { title: "Web Development", link: "#" },
      { title: "Mobile Development", link: "#" },
      { title: "AI & ML", link: "#" },
      { title: "Digital Marketing", link: "#" },
      { title: "Cloud Solutions", link: "#" },
    ]
  },
  {
    title: "Discover",
    // scrollId:"discover"
    children: [
      { title: "Blog & Insignts", link: "#" },
      { title: "Community", link: "#" },
      { title: "Resources", link: "#" },
      { title: "News & Update", link: "#" },
      { title: "Help", link: "#" },
    ]
  },
  {
    title: "About Us",
    // scrollId:"about-us"
    children:[
      {title: "Vision & Mission", link:"#"},
      {title: "Team", link:"#"},
      {title: "Contact", link:"#"},
    ]
  }
];

export const footerSections: FooterSection[] = [
   {
    title: "Services",
    links: [
      { title: "Degital Marketing", link: "#" },
      { title: "Web Development", link: "#" },
      { title: "App Development", link: "#" },
      { title: "Search Engine Optimization", link: "#" }
    ]
  },
  // {
  //   title: "Courses",
  //   links: [
  //     { title: "Graphic Design", link: "#" },
  //     { title: "Machine Learning", link: "#" },
  //     { title: "Data Science", link: "#" },
  //     { title: "Motion Graphihc", link: "#" },
  //     { title: "MERN Stack", link: "#" },
  //     { title: "Spring Boot", link: "#" }
  //   ]
  // },
  {
    title: "Our Works",
    links: [
      { title: "Web Development", link: "#" },
      { title: "Mobile Development", link: "#" },
      { title: "AI & ML", link: "#" },
      { title: "Digital Marketing", link: "#" },
      { title: "Cloud Solutions", link: "#" },
    ]
  },
  {
    title: "Discover",
    links: [
      { title: "Blog & Insignts", link: "#" },
      { title: "Community", link: "#" },
      { title: "Resources", link: "#" },
      { title: "News & Update", link: "#" },
      { title: "Help", link: "#" },
    ]
  },
  {
    title: "About Us",
    links:[
      {title: "Vision & Mission", link:"#"},
      {title: "Team", link:"#"},
      {title: "Contact", link:"#"},
    ]
  }
];