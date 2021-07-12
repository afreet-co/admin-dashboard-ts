declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_DESCRIPTION: string;
    NEXT_PUBLIC_APP_NAME: string;
    NEXT_PUBLIC_COMPANY_NAME: string;
  }
}

declare type ThemeType = "light" | "dark";

type RouteItem = {
  orderNo: number;
  iconClass: string;
  path: string;
  text: string;
};

type Route = {
  id: number | string;
  title: string;
  items: RouteItem[];
};
