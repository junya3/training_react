import Concept from "@/components/section/Concept";
import Keyvisual from "@/components/section/Keyvisual";
import Point from "@/components/section/Point";
import BreadSec from "@/components/section/TopBread";

export default function Home() {
  return (
    <>
      <Keyvisual/>
      <div className="container">
       <Concept/>
       <Point/>
       <BreadSec />
      </div>
    </>
  );
}