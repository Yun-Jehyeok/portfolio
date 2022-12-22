import { useState } from 'react';
import { useEffect } from 'react';

interface IHeader {
  setData: (data: string) => void;
}

export default function Header({ setData }: IHeader) {
  const [isMain, setIsMain] = useState(true);
  const top = isMain ? '-top-[72px]' : 'top-0';

  useEffect(() => {
    let absoluteTop = window.pageYOffset + screen.availHeight;

    document.addEventListener('scroll', () => {
      let scroll = document.documentElement.scrollTop;

      if (scroll < absoluteTop - 1) setIsMain(true);
      else setIsMain(false);
    });
  }, []);

  return (
    <div
      className={`w-full z-10 bg-white flex justify-center fixed ${top} h-[72px] shadow-md shadow-black-40 pl-6 pr-6 transition-all ease-out duration-300`}
    >
      <div className="w-[1177px] flex justify-between">
        <div className="flex flex-col justify-center h-full">
          <div className="text-[32px] w-fit h-fit cursor-default">
            YUN's Portfolio
          </div>
        </div>
        <div className="flex flex-col justify-center h-full">
          <div className="flex gap-[24px]">
            {['ABOUT', 'SKILLS', 'PROJECTS', 'CAREER', 'CONTACT'].map(
              (item) => (
                <div
                  key={item}
                  className="cursor-pointer h-fit text-xl hover:text-[#fb2e86] transition ease-out"
                  onClick={() => setData(item)}
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
