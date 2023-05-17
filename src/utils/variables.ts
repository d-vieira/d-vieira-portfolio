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
  { name: "Contate-me" },
];