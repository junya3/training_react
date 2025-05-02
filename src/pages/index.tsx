import Layout from "@/layouts/Layout";
import "@assets/css/reset.css";
import "@assets/css/style.css";

import Keyvisual from "@/components/section/Keyvisual";
import Concept from "@/components/section/Concept";



export default function Home() {
  return (
    <>
        <Layout>
            <Keyvisual/>
        </Layout>
    </>
  );
}