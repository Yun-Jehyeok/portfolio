import { useState } from 'react';
import Container from './commons/container';
import EditBtn from './commons/edit-btn';
import EditTextArea, { EditTextAreaBtm } from './commons/edit-textarea';

const discription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const task =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export default function Career() {
  const [isEdit, setIsEdit] = useState(false);

  const content = (
    <div className="w-[1177px] flex justify-between text-white">
      <div className="mr-10">
        <div className="text-4xl font-bold mb-4 w-60">COMPANY</div>
        <div className="text-2xl">2022.02.21 ~ NOW</div>
      </div>
      <div className="pl-10 border-l border-white w-full">
        <div className="pb-4">
          {isEdit ? (
            <EditTextArea
              defaultVal={discription}
              showBtm={false}
              setIsEdit={setIsEdit}
            />
          ) : (
            discription
          )}
        </div>
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <div className="border-white border-l-[6px] text-2xl font-bold pl-4 mb-4 mt-8">
              작업명
            </div>
            <div>
              {isEdit ? (
                <EditTextArea
                  defaultVal={task}
                  showBtm={false}
                  setIsEdit={setIsEdit}
                />
              ) : (
                task
              )}
            </div>
          </div>
        ))}
        {isEdit ? (
          <EditTextAreaBtm setIsEdit={setIsEdit} />
        ) : (
          <EditBtn setIsEdit={setIsEdit} />
        )}
      </div>
    </div>
  );

  return <Container title="CAREER" content={content}></Container>;
}
