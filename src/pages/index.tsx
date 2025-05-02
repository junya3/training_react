import Layout from "@/layouts/Layout";
import "@assets/css/reset.css";
import "@assets/css/style.css";

import Keyvisual from "@/components/section/Keyvisual";
import Concept from "@/components/section/Concept";
import Point from "@/components/section/Point";
import BreadSec from "@/components/section/TopBread";
import TopCafe from "@/components/section/TopCafe";
import News from "@/components/section/News";



export default function Home() {
  return (
    <>
        <Layout>
            <Keyvisual/>
            <div className="container">
              <Concept/>
              <Point/>
              <BreadSec/>
              <TopCafe />
              <News/>
            </div>
        </Layout>
    </>
  );
}