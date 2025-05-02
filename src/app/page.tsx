import Concept from "@/components/section/Concept";
import Keyvisual from "@/components/section/Keyvisual";
import Point from "@/components/section/Point";
import BreadSec from "@/components/section/TopBread";
import TopCafe from "@/components/section/TopCafe";
import News from "@/components/section/News";

export default function Home() {
  return (
    <>
      <Keyvisual/>
      <div className="container">
       <Concept/>
       <Point/>
       <BreadSec />
       <TopCafe />
       <News/>
      </div>
    </>
  );
}