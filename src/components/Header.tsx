import Image from "next/image";
import { useEffect, useState, ChangeEvent } from "react";
import { CiBellOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
interface Props {
  setSearch: (value: string) => void;
}
function Header({ setSearch }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <header
      className={`${
        isScrolled && "bg-[#141414]"
      } justify-between flex h-[3rem] p-8 z-1 relative`}
    >
      <div className="flex items-center space-x-2 md:space-x-10">
        <img className="logo" src="/logo.svg" alt="Netflix logo" />
        <ul className="hidden space-x-4 md:flex">
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            Home
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            TV Shows
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            Movies
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            New & Popular
          </li>
          <li className="cursor-pointer text-sm font-light text-[#e5e5e5] transition duration-[.4s] hover:text-[#b3b3b3]">
            My List
          </li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light mr-10">
        {showSearch && (
          <div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="search"
                id="search"
                className="block w-full rounded-md text-white-900 bg-white border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-white-400  sm:text-sm sm:leading-6"
                placeholder="Titles,people,genres"
                autoFocus
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <IoIosSearch
          className="hidden h-6 w-6 sm:inline text-[#e5e5e5] cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />

        <p className="hidden lg:inline text-[#e5e5e5] cursor-pointer">Kids</p>
        <CiBellOn className="h-6 w-6 text-[#e5e5e5] cursor-pointer" />
          <Image
            src="https://occ-0-7803-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"
            alt="profile"
            className="cursor-pointer rounded"
            width={30}
            height={30}
          />
      </div>
    </header>
  );
}

export default Header;
