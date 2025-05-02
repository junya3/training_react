import BreadSec from "@/components/parts/BreadSec";
import breadsItems from "@data/breadsList";

type BreadItem = {
  en: string;
  ja: string;
  type: string;
  image: number;
  detail: string;
};

const title = "人気のパン";
const subTitle = "BAKERY NICORIのおすすめ";
const items: BreadItem[] = breadsItems.slice(0, 3);

const TopBread = () => {
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

export default TopBread;