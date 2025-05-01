import Concept from "@/components/section/Concept";
import Keyvisual from "@/components/section/Keyvisual";
import Point from "@/components/section/Point";

export default function Home() {
  return (
    <>
      <Keyvisual/>
      <div className="container">
       <Concept/>
       <Point/>
      </div>
    </>
  );
}