import { NavigationMenuItem, NavigationMenuLink } from "@blog/components";
import { Link, useLocation } from "react-router";

interface MenuItemProps {
  to: string;
  title: string;
}
export function MenuItem(props: MenuItemProps) {
  const location = useLocation();
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild active={props.to === location.pathname}>
        <Link to={props.to}>{props.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
