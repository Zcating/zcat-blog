import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@blog/components";
import { Link, useLocation } from "react-router";
import { MenuItem } from "./menu-item";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b mb-3 bg-white">
      <NavigationMenu>
        <NavigationMenuList className="gap-1">
          <MenuItem to="/" title="首页" />
          <MenuItem to="/posts" title="文章" />
          <MenuItem to="/moments" title="说说" />
          <MenuItem to="/gallery" title="相册" />
          <MenuItem to="/about" title="关于" />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
