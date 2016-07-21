/*
 *
 * Brands
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectBrands from './selectors';
import styles from './styles.css';
import { getToken } from 'services/api';
export class Brands extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={styles.brands}>
        <Helmet
          title="Brands"
          meta={[
            { name: 'description', content: 'Description of Brands' },
          ]}
        />
      This is Brands container !
      </div>
    );
  }
}

const mapStateToProps = selectBrands();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands);
