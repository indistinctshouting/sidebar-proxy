import React from 'React';
import axios from 'axios';
import Menu from './Menu/Menu.jsx';
import Hours from './Hours/Hours.jsx';
import Summary from './Summary/Summary.jsx';
import styles from './App.css';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      restaurantData: {
        menu: {},
        hours: {},
      },
      date: undefined,
    }
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({ showMenu: true });
  }

  hideMenu() {
    this.setState({ showMenu: false });
  }

  getData() {
    const id = window.location.pathname.split('/')[1];
    axios.get(`/summary/id/${id}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ restaurantData: res.data, date: new Date() });
      });
  }

  componentDidMount() {
    this.getData();
  }


  render() {
    let menu;
    if (!!this.state.restaurantData.menu) {
      menu = <Menu
        show={this.state.showMenu}
        hideMenu={this.hideMenu}
        menuInfo={this.state.restaurantData.menu}
        name={this.state.restaurantData.restaurant_name}
      />
    }

    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarcontainer}>
          <div>
            <Summary
              hours={this.state.restaurantData.hours}
              showMenu={this.showMenu}
              priceRange={this.state.restaurantData.price_range}
              health={this.state.restaurantData.health_score}
              menuExists={!!this.state.restaurantData.menu}
            />
          </div>
          <div className={styles.hourcontainer}>
            <Hours
              hours={this.state.restaurantData.hours}
            />
          </div>
        </div>
          {menu}
      </div>
    )
  }
}

export default Sidebar;