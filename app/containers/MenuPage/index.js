/*
 *
 * MenuPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';
import MenuCard from 'components/MenuCard';

const navProps = {
  links: ['/home', '/users', '/content', '/purchases', '/leagues', '/brands', '/events', '/handicappers', '/members', '/operations', '/periods', '/picks', '/products', '/login' ],
  title: ['Home', 'Users', 'Content', 'Purchases', 'Leagues', 'Brands', 'Events', 'Handicappers', 'Members', 'Operations', 'Periods', 'Picks', 'Products', 'Login' ]
};

export class MenuPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
      const title = navProps.title;
      const content = navProps.links.map((item, index, ctx) => (
        <MenuCard title={title[index]} link={item} key={`item-${index}`}></MenuCard>
      ));
        return (
          <div className={styles.menuPage}>
            {content}
          </div>
        );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapDispatchToProps)(MenuPage);
