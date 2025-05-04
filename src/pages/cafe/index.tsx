import Layout from "@/layouts/Layout";
import "@assets/css/reset.css";
import "@assets/css/style.css";

import PageTitle from "@/components/commons/PageTitle";
import SpaceTop from "@/components/section/SpaceTop";
import CafePoint from "@/components/section/cafePoint";
import Gallery from "@/components/section/Gallery";

const pageTitle = "カフェスペース";
const pageSubTitle = "パンとコーヒーで、心がほどける時間を。";


export default function Home() {
  return (
    <>
        <Layout>
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <SpaceTop />
              <CafePoint/>
              <Gallery/>
            </div>
        </Layout>
    </>
  );
}
