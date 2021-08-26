// Module: api
// For making GET requests to api.genshin.dev.

export const getArticles = async (url: string): Promise<Array<string>> => {
  return fetch("https://api.genshin.dev/"+url)
    .then(res => {
      if (!res.ok) {
        return [];
      }
      return res.json();
  });
}

export const get = async (url: string): Promise<any> => {
  return fetch("https://api.genshin.dev/"+url)
    .then(res => {
      if (!res.ok) {
        return {};
      }
      return res.json();
  });
}