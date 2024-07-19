import Icon from "@/assets/icons/iconFactory";
import { SOCIAL_MEDIA } from "@/utils/constants";

const LeftSidebar = () => {
  return (
    <div className="fixed left-10 bottom-0 text-slate-light" aria-orientation="vertical">
      <ul className="flex flex-col after:fz-sidebar-line after:mt-5">
        {SOCIAL_MEDIA.map((title) => (
          <li key={title}>
            <a href="" className="p-2.5 inline-block hover:-translate-y-2.5 hover:text-green fz-transition">
              <Icon name={title} height="20px" width="20px"/>
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default LeftSidebar;
