import Icon from "@/assets/icons/iconFactory";
import { SOCIAL_MEDIA } from "@/utils/constants";

const RightSidebar = () => {
  return (
    <div className="fixed left-10 bottom-0" aria-orientation="vertical">
      <ul className="flex flex-col">
        {SOCIAL_MEDIA.map((title) => (
          <li>
            <a href="" className="p-10">
              <Icon name={title} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSidebar;
