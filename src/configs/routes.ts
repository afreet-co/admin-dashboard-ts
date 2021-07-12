export const sidebarRoutes: Route[] = [
  {
    id: 1,
    title: "Dashboard",
    items: [
      {
        iconClass: "fas fa-home",
        orderNo: 1,
        path: "/app/dashboard",
        text: "Home",
      },
      {
        iconClass: "fas fa-mouse",
        orderNo: 2,
        path: "/app/buttons",
        text: "Buttons",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      {
        iconClass: "fas fa-address-card",
        orderNo: 1,
        path: "/app/about",
        text: "About",
      },
    ],
  },
];
