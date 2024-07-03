import useData from "./useData";

interface info {
  id: number;
  slug: string;
  name: string;
}
export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  game: { game: info }[];
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
