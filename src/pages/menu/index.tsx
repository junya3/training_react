import Layout from "@/layouts/Layout";
import "@assets/css/reset.css";
import "@assets/css/style.css";

import PageTitle from "@/components/commons/PageTitle";
import MenuBread from "@/components/section/MenuBread";

const pageTitle = "メニュー";
const pageSubTitle = "BAKERY NICORIのパン";


export default function Home() {
  return (
    <>
        <Layout>
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <MenuBread />
            </div>
        </Layout>
    </>
  );
}