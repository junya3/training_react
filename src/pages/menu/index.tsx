import Layout from "@/layouts/Layout";

import PageTitle from "@/components/commons/PageTitle";
import MenuBread from "@/components/section/MenuBread";
import MenuInfo from "@/components/section/MenuInfo";
import DrinkMenu from "@/components/parts/DrinkMenu";

const pageTitle = "メニュー";
const pageSubTitle = "BAKERY NICORIのパン";


export default function Home() {
  return (
    <>
        <Layout pageTitle="MENU">
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <MenuBread />
              <MenuInfo/>
              <DrinkMenu />
            </div>
        </Layout>
    </>
  );
}
