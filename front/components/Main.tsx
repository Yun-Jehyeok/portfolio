import React from 'react';

export default function Main() {
  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    document.getElementById('ABOUT')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen bg-main flex justify-center flex-col">
      <div className="w-full flex justify-center">
        <div>
          <div className="text-5xl text-white text-center mb-10">
            Hello, I'm <span className="text-[#e21a6d]">윤제혁</span>.
            <div className="mt-4">웹 프론트엔드 개발자입니다.</div>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="text-white border-[3px] py-2 px-4 text-2xl hover:bg-[#e21a6d] hover:border-[#e21a6d] transition ease-out duration-200"
              onClick={onClickButton}
            >
              View my work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
