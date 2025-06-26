import './Menu.css'

const Menu = () => {
  return (
    <div className="menu-container">
      <h2>Menu</h2>
      <div className='menu'>
        {Array.from({length:6}).map((_, idx) => (
          <div className="menu-item" key={idx}></div>
        ))}
      </div>
    </div>
  )
}

export default Menu