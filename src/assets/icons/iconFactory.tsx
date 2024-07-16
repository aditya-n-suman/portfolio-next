import LogoBG from "../logo_bg";
import IconGitHub from "./github";
import IconLinkedin from "./linkedin";

interface IconProps {
  name: string;
}
const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "github":
      return <IconGitHub />;
    case "linkedin":
      return <IconLinkedin />;

    default:
      return <LogoBG />;
  }
};

export default Icon;
