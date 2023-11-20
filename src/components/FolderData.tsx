import { jsonMoviesData } from "@/Utils/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
interface Movie {
  id: number;
  name: string;
  time: string;
  type: string;
  description: string;
  img: string;
}
interface Props {
  search: string;
  setShowModal: (value: boolean) => void;
}
const FilterData = ({ search, setShowModal }: Props) => {
  const [data, setData] = useState<Movie[]>(jsonMoviesData);
  console.log(search);

  useEffect(() => {
    if (search.length > 0) {
      let filterMovie = jsonMoviesData.filter((item: Movie) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setData(filterMovie);
    } else {
      setData(jsonMoviesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="group relative md:-ml-2">
      {data.length > 0 ? (
        <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
          {data.map((movie) => (
            <div
              key={movie.id}
              className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
              onClick={() => setShowModal(true)}
            >
              <Image
                src={movie.img}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
                alt="movieIcon"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex text-white justify-center text-2xl">No matching </div>
      )}
    </div>
  );
};
export default FilterData;
