const API_KEY = ""; //TMDBのAPI_KEY

export const requests = {
  feactTopRated: `search/movie?api_key=${API_KEY}&language=ja-JP`,
  feactCredit: `credits?api_key=${API_KEY}&language=ja-JP`,
  feactOverview: `api_key=${API_KEY}&language=ja-JP`,
};
