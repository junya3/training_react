import Layout from "@/layouts/Layout";
import "@assets/css/reset.css";
import "@assets/css/style.css";

import PageTitle from "@/components/commons/PageTitle";
import Shop from "@components/section/Shop";
import AccessGuide from "@/components/section/AccessGuide";
// import ContactSec from "@/components/section/ContactSec";
const pageTitle = "アクセス";
const pageSubTitle = "お気軽にお越しください";


export default function Home() {
  return (
    <>
        <Layout>
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <Shop/>
              <AccessGuide/> 
              {/* <ContactSec/> */}
            </div>
        </Layout>
    </>
  );
}