import Container from './commons/container';

export default function Contact() {
  const content = (
    <div className="text-white text-2xl font-bold text-center">
      <div className="mb-6">
        Github
        <span className="ml-3 text-[#04c2c9] underline decoration-2 cursor-pointer">
          https://github.com/Yun-Jehyeok
        </span>
      </div>
      <div>
        Email
        <span className="ml-3 text-[#04c2c9] underline decoration-2 cursor-pointer">
          dbswpgur2@naver.com
        </span>
      </div>
    </div>
  );

  return <Container title="CONTACT" content={content}></Container>;
}
