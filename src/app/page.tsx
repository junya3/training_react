import Concept from "@/components/section/Concept";
import Keyvisual from "@/components/section/Keyvisual";
import Point from "@/components/section/Point";
import BreadSec from "@/components/section/TopBread";
import TopCafe from "@/components/section/TopCafe";

export default function Home() {
  return (
    <>
      <Keyvisual/>
      <div className="container">
       <Concept/>
       <Point/>
       <BreadSec />
       <TopCafe />
      </div>
    </>
  );
}