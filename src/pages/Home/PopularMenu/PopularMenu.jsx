import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  // console.log(menu);
  // filtering the popular menu from menu.json data
  const popularItem = menu.filter(item =>item.category === "popular");
  return (
    <section className="my-10">
      <SectionTitle
        subHeading={"---Popular menu---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid md:grid-cols-2 gap-10">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center ">
        <button className="btn border-b-4 border-x-2 p-3 rounded-md shadow-md uppercase my-5 w-2/5">
          View full menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
