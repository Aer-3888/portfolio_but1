export const getPDFUrl = (path) => {
    return new URL(`/public/${path}`, import.meta.url).href;
  };