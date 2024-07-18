import { IconProps } from "@/types/common";
import LogoBG from "../logo_bg";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconCoffeeMug from "./coffeemug";

interface IconFactoryProps extends IconProps {
  name: string;
}
const Icon = ({ name, ...rest }: IconFactoryProps) => {
  switch (name) {
    case "github":
      return <IconGitHub {...rest} />;
    case "linkedin":
      return <IconLinkedin {...rest} />;
    case "coffeemug":
      return <IconCoffeeMug {...rest} />;
    default:
      return <LogoBG />;
  }
};

export default Icon;
