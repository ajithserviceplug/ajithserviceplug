import React from "react";
import Location from "./Location";



const Home = () => {

  const menuOptions = [
    {
      text: "Nearby",
      selected: true
    },
    {
      text: "New Vehicles",
      selected: false

    },
    {
      text: "Market Place",
      selected: false

    },
    {
      text: "Feed",
      selected: false

    }

  ];

  const [menus, setMenus] = React.useState(menuOptions)

  const selectedMenu = (item) => {
    const updatedMenu = menuOptions.map(el => el.text === item.text ? {
      text: el.text,
      selected: true
    } : {
      text: el.text,
      selected: false
    });
    setMenus(updatedMenu);
  }


  const [address, setAddress] = React.useState('');

  React.useEffect(()=>{
    const newObj = menus.find(val => val.selected === true);
    setAddress(newObj);
  }, [menus,setAddress])


  return (
    <div className="home-container">
      <nav>
        <div className="navbar-links-container d-flex flex-wrap ">
          {menus.map((items, index) => (
            <a key={index}  className={items.selected === true ? 'active' : undefined} onClick={() => selectedMenu(items)} target="_blank" rel="noreferrer">{items.text}</a>
          ))}
        </div>
        <div className="navbar-links-container">
          <p> Login/Signup</p>
        </div>
      </nav>

      <div className="navbar-menu-container">
        <Location />
      </div>

      <div className="home-banner-container pt-4">
        <div className="home-text-section">
          <h5 className="primary-heading">
            {address.text}
          </h5>
        </div>
        <div className="home-image-section">
        </div>
      </div>


    </div>
  );
};

export default Home;
