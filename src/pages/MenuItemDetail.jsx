import { useParams } from "react-router-dom";
import menuList from "../data/menuList";

const MenuItemDetail = () => {
  const { id } = useParams();
  const menuItem = menuList.find(item => item.id === Number(id));

  if (!menuItem) {
    return <p>Menu item not found.</p>;
  }

  return (
    <div className="menu-item-detail">
      <h2>{menuItem.title}</h2>
      <img src={menuItem.imageUrl} alt={menuItem.title} style={{ maxWidth: "300px" }} />
      <p>{menuItem.discription}</p>
      <p>Price: ${menuItem.price.toFixed(2)}</p>
    </div>
  );
};

export default MenuItemDetail;