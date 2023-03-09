import { apikey } from "@/consts";

export const generateSearchUrl = (
  params: Array<{ param: string; value: string }>
) => {
  const convertedParams = new URLSearchParams();
  for (let p of params) {
    const { param, value } = p;
    convertedParams.set(param, value);
  }

  return `htps://www.omdbapi.com/?apikey=${apikey}&${convertedParams.toString()}`;
};
