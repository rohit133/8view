export interface INavLink {
  label: string;
  href: string;
}

export interface INavigationProps {
  links: INavLink[];
  logo: string;
}
