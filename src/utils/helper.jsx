export const getPDFUrl = (path) => {
    return new URL(`/${path}`, import.meta.url).href;
  };

