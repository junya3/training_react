import Layout from "@/layouts/Layout";

import PageTitle from "@/components/commons/PageTitle";
import Story from "@components/section/Story";
import OurValue from "@components/section/OurValue";
import OwnerMessage from "@/components/section/OwnerMessage";
import VisitorInformation from "@components/section/VisitorInformation";

const pageTitle = "当店について";
const pageSubTitle = "素材とまごころで、毎日に小さなごほうびを。";


export default function Home() {
  return (
    <>
        <Layout pageTitle="ABOUT US">
            <PageTitle 
              pageTitle={pageTitle} 
              pageSubTitle={pageSubTitle}
            />
            <div className="container">
              <Story />
              <OurValue />
              <OwnerMessage />
              <VisitorInformation/>
            </div>
        </Layout>
    </>
  );
}