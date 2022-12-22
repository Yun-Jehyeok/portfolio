import EditBtn from 'components/commons/edit-btn';
import { useState } from 'react';

export default function ProjectBox() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="w-[1177px] h-[969px] bg-white shadow-2xl rounded-[10px]">
      <EditBtn setIsEdit={setIsEdit} />
    </div>
  );
}
