import LogoBG from "@/assets/logo_bg";
import Logo from "@/assets/logo_complete";
import { NAV_ITEMS } from "@/utils/constants";

const Header = () => {
  return (
    <header className="transition-all px-[50px] h-[100px] w-full fixed flex items-center">
      <nav className="flex justify-between h-tab flex-1 font-mono items-center">
        <div className="">
          <a
            href="/"
            className="flex z-1 relative h-tab aspect-square text-green"
          >
            <div className="absolute -z-1">
              <LogoBG />
            </div>
            <div className="z-1 hover:-translate-x-2.5 hover:-translate-y-2.5 fz-transition ">
              <Logo />
            </div>
          </a>
        </div>
        <div className="flex gap-8 items-center text-xs h-full">
          <ol className="flex list-zero list-outside gap-14 ">
            {NAV_ITEMS.map((item) => (
              <li className="marker:text-green hover:text-green" key={item}>
                <a href={`#${item.toLowerCase()}`} className="">
                  {item}
                </a>
              </li>
            ))}
          </ol>
          <button className="flex items-center text-green border-green border-1px rounded-1.5 px-4 self-stretch fz-transition hover:fz-shadow hover:fz-translate">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
