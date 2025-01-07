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
    tags: ["Next.js", "React", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example-ecommerce.com",
    localUrl: "/projects/jogo",
  },
  {
    id: 2,
    title: "Aplicativo de Gerenciamento de Armazens",
    description:
      "Sistema de gerenciamento de armazéns com controle de estoque, movimentação de mercadorias e relatórios de desempenho.",
    image: "/thumbnails/warehouse.webp",
    tags: ["React", "Gatsby", "GraphQL", "Styled Components"],
    liveUrl: "https://warehouse-watcher.vercel.app/",
    localUrl: "/projects/warehouse",
  },
  {
    id: 3,
    title: "Onboarding de Pacientes para Clinicas",
    description:
      "Formulario de onboarding de pacientes para clínicas com agendamento de consultas e relatórios.",
    image: "/thumbnails/clinica.webp",
    tags: ["Vue.js", "Vuex", "Firebase", "Element UI"],
    liveUrl: "https://example-taskmanager.com",
    localUrl: "/projects/clinica",
  },
  {
    id: 4,
    title: "Jogo Isométrico 3D",
    description:
      "Jogo isométrico 3D com gráficos 3D, animações e trilha sonora.",
    image: "/thumbnails/jogo3d.webp",
    tags: ["Unity", "C#", "3D", "Audio"],
    liveUrl: "https://example-taskmanager.com",
    localUrl: "/projects/jogo3d",
  },
  {
    id: 5,
    title: "Plataforma Colaborativa em Tempo Real",
    description:
      "Plataforma colaborativa em tempo real com chat, compartilhamento de arquivos e controle de versão.",
    image: "/thumbnails/colaborative.webp",
    tags: ["React", "Firebase", "Next.js", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    localUrl: "/projects/colaborative",
  },
  {
    id: 6,
    title: "Editor de Textos Colaborativo similar a Google Docs",
    description:
      "Editor de textos colaborativo similar a Google Docs com controle de versão e colaboração em tempo real.",
    image: "/thumbnails/googledocs.webp",
    tags: ["React", "Firebase", "Next.js", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    localUrl: "/projects/googledocs",
  },
  {
    id: 7,
    title: "Clone de Duolingo",
    description:
      "Plataforma de aprendizado de idiomas com gamificação, quizzes e feedback em tempo real.",
    image: "/thumbnails/duolingo.webp",
    tags: ["React", "Firebase", "Next.js", "Tailwind CSS"],
    liveUrl: "https://react-duolingo-clone.vercel.app/learn",
    localUrl: "/projects/duolingo",
  },
  {
    id: 8,
    title: "Pagina de Marketing",
    description: "Pagina de marketing com animações e efeitos de parallax.",
    image: "/thumbnails/landing.webp",
    tags: ["React", "Firebase", "Next.js", "Tailwind CSS"],
    liveUrl: "https://react-duolingo-clone.vercel.app/learn",
    localUrl: "/projects/landing",
  },
];

export const tagColors: { [key: string]: string } = {
  "Next.js": "bg-blue-500",
  React: "bg-cyan-500",
  "Tailwind CSS": "bg-teal-500",
  Stripe: "bg-purple-500",
  Gatsby: "bg-pink-500",
  GraphQL: "bg-red-500",
  "Styled Components": "bg-yellow-500",
  "Vue.js": "bg-green-500",
  Vuex: "bg-indigo-500",
  Firebase: "bg-orange-500",
  "Element UI": "bg-lime-500",
};
