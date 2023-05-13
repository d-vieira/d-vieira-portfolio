import Link from "next/link";
import MySQLIcon from "./stacks/MySQLIcon";
import MongoDBIcon from "./stacks/MongoDBIcon";
import ExpressIcon from "./stacks/ExpressIcon";
import SequelizeIcon from "./stacks/SequelizeIcon";
import MongooseIcon from "./stacks/MongooseIcon";
import {
  STACKS_CARDS_CSS,
  STACKS_ICONS_HEIGHT,
  STACKS_ICON_WIDTH,
} from "@/utils/variables";

export default function BackEndStacks() {
  return (
    <div className="flex gap-6 mt-10">
      {backEnd.map(({ Stack, title, url }, index) => {
        return (
          <Link
            key={index}
            className={STACKS_CARDS_CSS}
            href={url}
            title={title}
            target="_blank"
          >
            <Stack x={STACKS_ICON_WIDTH} y={STACKS_ICONS_HEIGHT} />
            {title}
          </Link>
        );
      })}
    </div>
  );
}

const backEnd = [
  { Stack: MySQLIcon, title: "MySQL", url: "https://www.mysql.com/" },
  { Stack: MongoDBIcon, title: "MongoDB", url: "https://www.mongodb.com/" },
  { Stack: ExpressIcon, title: "Express.js", url: "https://expressjs.com/" },
  { Stack: SequelizeIcon, title: "Sequelize", url: "https://sequelize.org/" },
  { Stack: MongooseIcon, title: "Mongoose", url: "https://mongoosejs.com/" },
];
