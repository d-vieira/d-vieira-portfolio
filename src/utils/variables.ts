import Discord from "@/components/socials/Discord";
import Github from "@/components/socials/Github";
import Linkedin from "@/components/socials/Linkedin";
import Spotify from "@/components/socials/Spotify";
import Steam from "@/components/socials/Steam";
import WhatsApp from "@/components/socials/WhatsApp";
import ChaiIcon from "@/components/stacks/ChaiIcon";
import Css3Icon from "@/components/stacks/Css3Icon";
import DockerIcon from "@/components/stacks/DockerIcon";
import ExpressIcon from "@/components/stacks/ExpressIcon";
import GitIcon from "@/components/stacks/GitIcon";
import GithubIcon from "@/components/stacks/GithubIcon";
import Html5Icon from "@/components/stacks/Html5Icon";
import JSIcon from "@/components/stacks/JSIcon";
import JestIcon from "@/components/stacks/JestIcon";
import MochaIcon from "@/components/stacks/MochaIcon";
import MongoDBIcon from "@/components/stacks/MongoDBIcon";
import MongooseIcon from "@/components/stacks/MongooseIcon";
import MySQLIcon from "@/components/stacks/MySQLIcon";
import NextIcon from "@/components/stacks/NextIcon";
import NodeJsIcon from "@/components/stacks/NodeJsIcon";
import PytestIcon from "@/components/stacks/PytestIcon";
import PythonIcon from "@/components/stacks/PythonIcon";
import RTLIcon from "@/components/stacks/RTLIcon";
import ReactIcon from "@/components/stacks/ReactIcon";
import SequelizeIcon from "@/components/stacks/SequelizeIcon";
import TSIcon from "@/components/stacks/TSIcon";
import TailwindIcon from "@/components/stacks/TailwindIcon";

export const STACKS_OVERALL = [
  { Stack: JSIcon, title: "JavaScript", url: "https://www.javascript.com/" },
  {
    Stack: TSIcon,
    title: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  { Stack: PythonIcon, title: "Python", url: "https://www.python.org/" },
  { Stack: NodeJsIcon, title: "Node.js", url: "https://nodejs.org/" },
  { Stack: DockerIcon, title: "Docker", url: "https://www.docker.com/" },
  { Stack: GitIcon, title: "Git", url: "https://git-scm.com/" },
  { Stack: GithubIcon, title: "GitHub", url: "https://github.com/" },
];

export const STACKS_FRONT_END = [
  { Stack: ReactIcon, title: "React.js", url: "https://react.dev/" },
  { Stack: NextIcon, title: "Next.js", url: "https://nextjs.org/" },
  {
    Stack: TailwindIcon,
    title: "TailwindCSS",
    url: "https://tailwindcss.com/",
  },
  { Stack: Html5Icon, title: "HTML 5", url: "https://html.spec.whatwg.org/" },
  { Stack: Css3Icon, title: "CSS 3", url: "https://www.w3.org/Style/CSS/" },
];

export const STACKS_BACK_END = [
  { Stack: MySQLIcon, title: "MySQL", url: "https://www.mysql.com/" },
  { Stack: MongoDBIcon, title: "MongoDB", url: "https://www.mongodb.com/" },
  { Stack: ExpressIcon, title: "Express.js", url: "https://expressjs.com/" },
  { Stack: SequelizeIcon, title: "Sequelize", url: "https://sequelize.org/" },
  { Stack: MongooseIcon, title: "Mongoose", url: "https://mongoosejs.com/" },
];

export const STACKS_TESTING_LIBS = [
  { Stack: RTLIcon, title: "RTL", url: "https://testing-library.com/" },
  { Stack: JestIcon, title: "Jest", url: "https://jestjs.io/" },
  { Stack: MochaIcon, title: "Mocha", url: "https://mochajs.org/" },
  { Stack: ChaiIcon, title: "Chai", url: "https://www.chaijs.com/" },
  { Stack: PytestIcon, title: "Pytest", url: "https://docs.pytest.org/" },
];

export const NAV_SECTIONS = [
  { name: "Início" },
  { name: "Sobre" },
  { name: "Portfólio" },
  { name: "Habilidades" },
  { name: "Contato" },
];

export const SOCIALS = [
  { Social: Steam, title: "Perfil na Steam", url: "https://steamcommunity.com/profiles/76561198095134496/"},
  { Social: Discord, title: "Perfil no Discord", url: "https://discord.gg/Shouzen#9784"},
  { Social: WhatsApp, title: "Contato no WhatsApp", url: "https://wa.me/5591981307406"},
  { Social: Spotify, title: "Perfil no Spotify", url: "https://open.spotify.com/user/12181092618?si=1db7ccd7b59f4f85"},
  { Social: Github, title: "Perfil no Github", url: "https://github.com/d-vieira"},
  { Social: Linkedin, title: "Perfil no LinkedIn", url: "https://www.linkedin.com/in/daniel-vieira-martins/"},
]

export const PROJECTS = [
  {
    imgSrc: "/br-consultoria-empresarial.jpg",
    imgAlt: "Imagem do site BR Consultoria",
    title: "BR Consultoria Empresarial",
    description:
      `Esse projeto trata-se de uma Landing Page, desenvolvida para estabelecer e divulgar a presença da empresa de contabilidade BR Consultoria no mundo Digital. Tanto a parte de Design/Layout quanto a Programação da página foram elaborados em equipe pelos devs: Breno Trindade, Alberto Florence e Daniel Vieira. A responsividade da página é uma de nossas maiores preocupações e por esse motivo, praticamente toda a estilização dos componentes foi baseada em Mobile 1st. As core stacks utilizadas foram: TypeScript, Next.js, TailwindCSS, Figma e Discord.`,
    url: "https://brconsultoriaempresarial.com/",
  },
  {
    imgSrc: "/strangerthingsapp.jpg",
    imgAlt: "Imagem do App Stranger things",
    title: "Stranger Things App",
    description:
      "Uma aplicação full stack na qual você pode pesquisar por personagens do seriado Stranger Things e interagir com a temática do site! Esse app foi produzido durante a minha trajetória no curso de Desenvolvimento Web da Trybe com o propósito de aplicar os conhecimentos relacionados aos fluxos de CI/CD e Deploy.",
    url: "https://strangerthings-d-vieira.vercel.app/",
  },
  {
    imgSrc: "/solarsystem.jpg",
    imgAlt: "Imagem do App Sistema Solar",
    title: "Sistema Solar",
    description:
      "Uma recriação em TypeScript + Next.js + TailwindCss do meu primeiro projeto em React.js feito no curso de Desenvolvimento Web da Trybe.",
    code: "https://github.com/d-vieira/solar-system",
    url: "https://solarsystem-d-vieira.vercel.app/",
  },
  {
    imgSrc: "/pagina-em-construcao.jpg",
    imgAlt: "Mais projetos em breve!",
    title: "Em construção!",
    description: "Novos projetos chegarão em breve! Quem sabe o da sua empresa não seria um deles?",
  },
];