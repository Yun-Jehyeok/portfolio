import { useState } from 'react';
import Container from './commons/container';
import EditBtn from './commons/edit-btn';
import EditTextArea from './commons/edit-textarea';
import FloatingButton from './commons/floating-button';

const data =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it tomake a type specimen book. It has survived not only five centuries, butalso the leap into electronic typesetting, remaining essentiallyunchanged. It was popularised in the 1960s with the release of Letrasetsheets containing Lorem Ipsum passages, and more recently with desktoppublishing software like Aldus PageMaker including versions of LoremIpsum.";

export default function About() {
  const [isEdit, setIsEdit] = useState(false);

  const content = isEdit ? (
    <div className="w-[1177px]">
      <EditTextArea defaultVal={data} showBtm={true} setIsEdit={setIsEdit} />
    </div>
  ) : (
    <div className="w-[1177px] text-center text-xl content">
      {data}
      <EditBtn setIsEdit={setIsEdit} />
      {/* <FloatingButton /> */}
    </div>
  );

  return <Container title="ABOUT" content={content}></Container>;
}
