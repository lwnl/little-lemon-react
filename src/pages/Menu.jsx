import './Menu.css'
import menuList from '../data/menuList'
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className='menu'>
        {menuList.map((menuItem) => (
          <Link to={`/menu/${menuItem.id}`} className="menu-item" key={menuItem.id} target='_blank'>
            <h4>{menuItem.title}</h4>
            <div className='image-container'>
              <img src={menuItem.imageUrl} alt={menuItem.title} />
            </div>
            <p>price: ${menuItem.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu