export const titleCase = (text: string) => {
  return text.replace(/(^|\s)\S/g, (t) => t.toUpperCase());
};

export const getTitleFromPath = (routePath: string) => {
  const paths = routePath.split("/");
  const lastPath = paths[paths.length - 1];
  return titleCase(lastPath?.split("?")[0]?.split("-").join(" ") || "Home");
};
