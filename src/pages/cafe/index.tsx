import Layout from "@/layouts/Layout";

import PageTitle from "@/components/commons/PageTitle";
import SpaceTop from "@/components/section/SpaceTop";
import CafePoint from "@/components/section/cafePoint";
import Gallery from "@/components/section/Gallery";
import Event from "@/components/section/Event";

const pageTitle = "カフェスペース";
const pageSubTitle = "パンとコーヒーで、心がほどける時間を。";


export default function Home() {
  return (
    <>
        <Layout pageTitle="CAFESPACE">
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <SpaceTop />
              <CafePoint/>
              <Gallery/>
              <Event/>
            </div>
        </Layout>
    </>
  );
}
