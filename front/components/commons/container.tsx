interface IContainer {
  title: string;
  content: JSX.Element;
}

export default function Container({ title, content }: IContainer) {
  const bgColor =
    title === 'ABOUT'
      ? 'bg-white'
      : title === 'SKILLS'
      ? 'bg-[#f3f2f3]'
      : title === 'PROJECTS'
      ? 'bg-[#1c809f]'
      : title === 'CAREER'
      ? 'bg-[#3b6aeb]'
      : title === 'CONTACT'
      ? 'bg-[#252934]'
      : 'bg-white';

  const fontColor =
    title === 'ABOUT'
      ? 'text-black'
      : title === 'SKILLS'
      ? 'text-black'
      : 'text-white';

  return (
    <div className={`w-full pt-[136px] pb-[136px] ${bgColor} pl-6 pr-6`}>
      <div className="flex justify-center w-full mb-16">
        <div
          className={`border-b border-[#cccccc] w-fit pb-[21px] text-[64px] font-bold ${fontColor}`}
        >
          {title}
        </div>
      </div>
      <div className="w-full flex justify-center">{content}</div>
    </div>
  );
}
