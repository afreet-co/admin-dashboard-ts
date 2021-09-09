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
      {
        iconClass: "fas fa-table",
        orderNo: 3,
        path: "/app/paginated-table",
        text: "Paginated Table",
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
