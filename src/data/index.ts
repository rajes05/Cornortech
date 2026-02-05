import { Feature, Tool, Testimonial, Stat, NavigationItem, FooterSection } from '@/types';

export const features: Feature[] = [
  {
    title: "AI video maker",
    description: "A quick chat with CapCut's AI video editor and it'll build a video from scratch, style, avatar, everything.",
    icon: "/icons/ai-video-maker.svg",
    link: "#"
  },
  {
    title: "AI dialogue scene",
    description: "Want your photos to talk, sing, or react? CapCut's video editor makes creating dialogue scenes effortless.",
    icon: "/icons/ai-dialogue.svg",
    link: "#"
  },
  {
    title: "AI video generator",
    description: "Turn text, images, or keyframes into videos with the smartest online video editor you've ever used.",
    icon: "/icons/ai-video-generator.svg",
    link: "#"
  },
  {
    title: "AI image generator",
    description: "Turn text or reference images into custom, stunning visuals with CapCut's powerful online photo editor.",
    icon: "/icons/ai-image-generator.svg",
    link: "#"
  },
  {
    title: "Dreamina AI",
    description: "Got a simple prompt? Try CapCut's AI-powered video creation for stunning AI art and cinematic video.",
    icon: "/icons/dreamina-ai.svg",
    link: "#"
  },
  {
    title: "Pippit AI",
    description: "The viral video generator that turns text, links, images, or anything into ready-to-post videos.",
    icon: "/icons/pippit-ai.svg",
    link: "#"
  }
];

export const textTools: Tool[] = [
  {
    title: "AI caption generator",
    description: "Add accurate, perfectly timed captions to your videos with CapCut's powerful AI caption generator.",
    image: "/tools/ai-caption.jpg",
    category: "Text"
  },
  {
    title: "Caption templates",
    description: "Find the perfect caption style from 100+ templates for music, gaming, and more in our video editor.",
    image: "/tools/caption-templates.jpg",
    category: "Text"
  },
  {
    title: "Remove filler words",
    description: "Speech fillers like \"um\" and \"uh\" are automatically removed as our AI caption generator transcribes.",
    image: "/tools/remove-filler.jpg",
    category: "Text"
  },
  {
    title: "Bilingual captions",
    description: "Generate captions in several languages and show bilingual captions to double your audience.",
    image: "/tools/bilingual-captions.jpg",
    category: "Text"
  }
];

export const audioTools: Tool[] = [
  {
    title: "Text to speech",
    description: "Turn any text into natural voiceovers in just a few seconds with CapCut's advanced AI voice generator.",
    image: "/tools/text-to-speech.jpg",
    category: "Audio"
  },
  {
    title: "Custom voices",
    description: "Record your voice just once, then use it as the voiceover whenever you turn text to speech.",
    image: "/tools/custom-voices.jpg",
    category: "Audio"
  },
  {
    title: "Enhance voice",
    description: "From text-to-speech to voice enhancement, get broadcast-quality sound for any project in minutes.",
    image: "/tools/enhance-voice.jpg",
    category: "Audio"
  },
  {
    title: "Reduce noise",
    description: "From video upscaler to noise reduction, we restore your footage to perfection, every single time.",
    image: "/tools/reduce-noise.jpg",
    category: "Audio"
  }
];

export const creativeTools: Tool[] = [
  {
    title: "Video effects",
    description: "Choose from a huge library of effects in CapCut's video editor and make your Reels and Shorts pop.",
    image: "/tools/video-effects.jpg",
    category: "Creative Assets"
  },
  {
    title: "Sound effects",
    description: "Our video editing suite offers thousands of sound effects to make your videos more immersive.",
    image: "/tools/sound-effects.jpg",
    category: "Creative Assets"
  },
  {
    title: "Transitions",
    description: "Elevate your video's flow with a massive library of stunning, cinematic transitions built right in.",
    image: "/tools/transitions.jpg",
    category: "Creative Assets"
  },
  {
    title: "Filters",
    description: "Give every video a unique aesthetic with our library of filters to make it look just how you imagined.",
    image: "/tools/filters.jpg",
    category: "Creative Assets"
  }
];

export const imageVideoTools: Tool[] = [
  {
    title: "Remove background",
    description: "The one-click background remover for your videos and images, delivering a perfect cutout every time.",
    image: "/tools/remove-background.jpg",
    category: "Image & Video"
  },
  {
    title: "Retouch",
    description: "All the powerful retouching tools you love in a photo editor, now built right into our video editor.",
    image: "/tools/retouch.jpg",
    category: "Image & Video"
  },
  {
    title: "Enhance quality",
    description: "Make every clip look like it was shot on a pro camera. The one-click video upscaler you've been waiting for.",
    image: "/tools/enhance-quality.jpg",
    category: "Image & Video"
  },
  {
    title: "Video stabilization",
    description: "Turn shaky, handheld footage into smooth, stable video with our intelligent online video editor.",
    image: "/tools/video-stabilization.jpg",
    category: "Image & Video"
  }
];

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