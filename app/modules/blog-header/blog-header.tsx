import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@blog/components";
import { Link, useLocation } from "react-router";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b mb-3">
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

interface MenuItemProps {
  to: string;
  title: string;
}
function MenuItem(props: MenuItemProps) {
  const location = useLocation();
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild active={props.to === location.pathname}>
        <Link to={props.to}>{props.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
