import EditBtn from 'components/commons/edit-btn';
import { useState } from 'react';

interface ISkillBox {
  title: string;
}

export default function SkillBox({ title }: ISkillBox) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div
      className={`w-[272px] h-[766px] bg-white shadow-xl rounded-2xl pl-3 pr-3 pt-5 pb-5 relative bottom-0 hover:bottom-2 transition-all ease-out`}
    >
      <div className="border-b border-gray-200 flex justify-center pb-3 text-2xl font-semibold">
        <div>{title}</div>
      </div>
      <EditBtn setIsEdit={setIsEdit} />
    </div>
  );
}
