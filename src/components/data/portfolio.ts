import axios from "axios"


interface Portfolio_array{
    title: string,
    tech: string[],
    description: string,
    image?: string
}


const portfolioProjects: Portfolio_array[] = [
  {
    title: "CareerHub: Job Board for Junior Developers",
    tech: ["React", "Next.js", "TailwindCSS", "Node.js", "PostgreSQL", "Supabase", "Vercel"],
    description: "Built a job board for junior developers in Indonesia to find beginner-friendly tech jobs. I led fullstack development using Next.js and Supabase, implemented search/filter features, and deployed via Vercel. Within a month, it gained 150+ jobs, 400+ users, and helped 12 users land interviews."
  },
  {
    title: "FitTrack: Personal Fitness Tracker",
    tech: ["React Native", "Expo", "Firebase", "Chart.js", "Figma"],
    description: "Designed a minimalist fitness tracker for beginners to log workouts and hydration. Built with React Native and Firebase, including charts and daily reminders. Achieved 90% retention with early users and received positive feedback for its simplicity and ease of use."
  },
  {
    title: "EduPath: Career Roadmap Generator",
    tech: ["Next.js", "Supabase", "Chart.js", "DaisyUI", "OpenAI API"],
    description: "Created a tool to help Indonesian students explore careers based on interests and majors. Built with Next.js and Supabase, featuring visual skill paths and optional AI-generated study plans. Used by 500+ students during soft launch and adopted by schools for career counseling."
  }
];
