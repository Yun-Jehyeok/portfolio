import { SetStateAction } from 'react';

interface IEditTextArea {
  defaultVal: string;
  showBtm: Boolean;
  setIsEdit: (data: SetStateAction<boolean>) => void;
}
interface IEditTextAreaBtm {
  setIsEdit: (data: SetStateAction<boolean>) => void;
}

export const EditTextAreaBtm = ({ setIsEdit }: IEditTextAreaBtm) => (
  <div className="mt-3 flex justify-end">
    <div className="flex gap-2">
      <div
        className="cursor-pointer hover:text-[#e21a6d]"
        onClick={() => setIsEdit(false)}
      >
        Cancel
      </div>
      <div className="cursor-pointer hover:text-[#e21a6d]">Edit</div>
    </div>
  </div>
);

export default function EditTextArea({
  defaultVal,
  showBtm = true,
  setIsEdit,
}: IEditTextArea) {
  return (
    <div>
      <textarea
        className="w-full h-56 border-[#bdbdd8] resize-none focus:ring-[#bdbdd8] text-black"
        value={defaultVal}
      ></textarea>
      {showBtm ? <EditTextAreaBtm setIsEdit={setIsEdit} /> : ''}
    </div>
  );
}
