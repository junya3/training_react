import DrinkMenuItems from "./DrinkMenuItems";
import CardGrid2 from "./CardGrid2";
import CenterTitle from "./CenterTitle";

const title = "ドリンクメニュー";
const subTitle = "パンと一緒にお楽しみください";

const DrinkMenu = () => {
  return (
    <>
      <section>
          <CenterTitle title={title} subTitle={subTitle}/>
          <CardGrid2>
              <DrinkMenuItems/>
          </CardGrid2>
      </section>
    </>
  )
}

export default DrinkMenu;