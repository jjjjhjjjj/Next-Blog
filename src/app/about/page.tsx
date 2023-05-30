import Profile from "@/components/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="flex flex-col items-center ">
      <Profile />
      <section className="flex flex-col items-center p-10 mt-10 bg-slate-100 w-4/5 rounded-md shadow-lg">
        <strong className="text-3xl">Who am I?</strong>
        <p className="text-center my-5 text-lg">
          죠르디를 좋아하는 개발자
          <br />
          모든 죠르디 굿즈들을 다 사고싶음
        </p>
        <strong className="text-3xl">Career</strong>
        <p className="text-center my-5 text-lg">
          죠르디 핸드폰 (-Now)
          <br />
          죠르디 인형 (-2022)
          <br />
          죠르디 키보드 (-2021)
        </p>
        <strong className="text-3xl">Skils</strong>
        <p className="text-center mt-5 text-lg">
          마우스, 키보드, 쓰레기통
          <br />
          지갑, 인형, 손목 보호대
          <br />
          스티커, 볼펜, 쿨매트
        </p>
      </section>
    </section>
  );
}
