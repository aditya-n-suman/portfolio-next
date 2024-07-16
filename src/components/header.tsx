import LogoBG from "@/assets/logo_bg";
import Logo from "@/assets/logo_complete";
import { NAV_ITEMS } from "@/utils/constants";

const Header = () => {
  return (
    <header className="transition-all px-[50px] h-[100px] w-full fixed flex items-center">
      <nav className="flex justify-between flex-1 font-mono">
        <div className="">
          <a href="/" className="flex z-1 relative h-tab aspect-square text-green">
            <div className="absolute -z-1">
              <LogoBG />
            </div>
            <div className="z-1 hover:-translate-x-2.5 hover:-translate-y-2.5 fz-transition ">
              <Logo />
            </div>
            </a>
        </div>
        <div className="">
          <ol className="flex list-zero list-outside gap-10 text-xs ">
            {NAV_ITEMS.map((item) => (
              <li className="marker:text-green text-slate-lightest hover:text-green" key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </header>
  );
};

export default Header;
