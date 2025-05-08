import Layout from "@/layouts/Layout";

import Keyvisual from "@/components/section/Keyvisual";
import Concept from "@/components/section/Concept";
import Point from "@/components/section/Point";
import BreadSec from "@/components/section/TopBread";
import TopCafe from "@/components/section/TopCafe";
import News from "@/components/section/News";

const pageTitle = "TOP";

export default function Home() {
  return (
    <>
        <Layout pageTitle={pageTitle}>
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