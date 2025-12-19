export const withBasePath = (path: string) => {
  const base = process.env.NODE_ENV === "production" ? "/ColdBlock" : "";
  return `${base}${path}`;
};
