export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  localUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma de Treinamento Gamificado ",
    description:
      "Plataforma gamificada com conteúdo educativo, quizzes, pontuação e ranking, estimulando aprendizado e engajamento por meio de recompensas.",
    image: "/thumbnails/jogo.webp",
    tags: ["Gaming", "Education", "Real-Time", "Interactive"],
    liveUrl: "https://vibra-showcase-seven.vercel.app/",
    localUrl: undefined,
  },
  {
    id: 2,
    title: "Aplicativo de Gerenciamento de Armazens",
    description:
      "Sistema de gerenciamento de armazéns com controle de estoque, movimentação de mercadorias e relatórios de desempenho.",
    image: "/thumbnails/warehouse.webp",
    tags: ["AI", "Analytics", "Database", "Enterprise"],
    liveUrl: "https://warehouse-watcher.vercel.app/",
    localUrl: undefined,
  },
  {
    id: 3,
    title: "Onboarding de Pacientes para Clinicas",
    description:
      "Formulario de onboarding de pacientes para clínicas com agendamento de consultas e relatórios.",
    image: "/thumbnails/clinica.webp",
    tags: ["Healthcare", "Forms", "Database", "Scheduling"],
    liveUrl: undefined,
    localUrl: undefined,
  },
  {
    id: 4,
    title: "Jogo Isométrico 3D",
    description:
      "Jogo isométrico 3D com gráficos 3D, animações e trilha sonora.",
    image: "/thumbnails/jogo3d.webp",
    tags: ["Gaming", "3D", "Animation", "Audio"],
    liveUrl: undefined,
    localUrl: undefined,
  },
  {
    id: 5,
    title: "Plataforma Colaborativa em Tempo Real Miro",
    description:
      "Plataforma colaborativa em tempo real com chat, compartilhamento de arquivos e controle de versão.",
    image: "/thumbnails/colaborative.webp",
    tags: ["Real-Time", "Collaboration", "Chat", "File Sharing"],
    liveUrl: "https://next14-miro-clone-additional-master.vercel.app/",
    localUrl: undefined,
  },
  {
    id: 6,
    title: "Editor de Textos Colaborativo similar a Google Docs",
    description:
      "Editor de textos colaborativo similar a Google Docs com controle de versão e colaboração em tempo real.",
    image: "/thumbnails/googledocs.webp",
    tags: ["Real-Time", "Collaboration", "Text Editor", "Version Control"],
    liveUrl: "https://docs-tutorial-master.vercel.app/",
    localUrl: undefined,
  },
  {
    id: 7,
    title: "Clone de Duolingo",
    description:
      "Plataforma de aprendizado de idiomas com gamificação, quizzes e feedback em tempo real.",
    image: "/thumbnails/duolingo.webp",
    tags: ["Education", "Gaming", "Interactive", "Real-Time"],
    liveUrl: "https://react-duolingo-clone.vercel.app/learn",
    localUrl: undefined,
  },
  {
    id: 8,
    title: "Pagina de Marketing",
    description: "Pagina de marketing com animações e efeitos de parallax.",
    image: "/thumbnails/landing.webp",
    tags: ["Marketing", "Animation", "Interactive", "SEO"],
    liveUrl: "https://m.starbem.ca/",
    localUrl: undefined,
  },
];

export const tagColors: { [key: string]: string } = {
  // Feature-based colors
  "Real-Time": "bg-blue-500",
  Gaming: "bg-purple-500",
  Interactive: "bg-cyan-500",
  Database: "bg-orange-500",
  Analytics: "bg-green-500",
  "3D": "bg-indigo-500",
  Animation: "bg-pink-500",
  Audio: "bg-yellow-500",
  Collaboration: "bg-teal-500",
  Education: "bg-emerald-500",
  Healthcare: "bg-sky-500",
  Marketing: "bg-rose-500",
  SEO: "bg-amber-500",
  Forms: "bg-lime-500",
  Enterprise: "bg-violet-500",
  Chat: "bg-fuchsia-500",
  "File Sharing": "bg-blue-400",
  "Text Editor": "bg-indigo-400",
  "Version Control": "bg-purple-400",
  Scheduling: "bg-teal-400",
};
