import BreadSec from "../parts/BreadSec";
import breadsItems from "@/data/breadsList";

type BreadItem = {
  en: string;
  ja: string;
  type: string;
  image: number;
  detail: string;
};


const title = "人気のパン";
const subTitle = "BAKERY NICORIのおすすめ";
const items: BreadItem[] = breadsItems;

const MenuBread = () =>{
  return (
    <>
      <BreadSec
        title={title}
        subTitle={subTitle}
        items={items}
      />
    </>
  )
}

export default MenuBread;