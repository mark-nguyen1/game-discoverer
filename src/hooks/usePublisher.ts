import useData from "./useData";

export interface Publisher {
  id: number;
  name: string;
  slug: string;
}

const usePublisher = () => useData<Publisher>("/publishers");

export default usePublisher;
