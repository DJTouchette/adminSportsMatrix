/**
*
* UserCard
*
*/

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './styles.css';
import EditCard from '../EditCard';
import Card from '../Card';

class UserCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { mode: '' };
  }

  componentDidMount() {

  }

  handleEditClick() {
    console.log('edit click');
    this.setState({ mode: 'edit' });
  }

  handleEditBackClick() {
    console.log('edit');
    this.setState({mode: ''});
  }

  handleSave() {
    console.log('save');
    console.log(this.props);
    this.props.save();
  }

  render() {
    const mode = this.state.mode;
    if (mode === 'edit') {
      return (
        <div className=''>
          <EditCard editKeys={this.props.editKeys} updateForm={this.props.updateForm} save={this.handleSave.bind(this)} edit={this.props.edit} msg={this.props.msg} backClick={this.handleEditBackClick.bind(this)} item={this.props.item}/>
        </div>
      )
    }

    return (
      <div className=''>
        <Card save={this.props.save} msg={this.props.msg} handleEdit={this.handleEditClick.bind(this)} item={this.props.item}/>
      </div>
    );
  }
}

export default UserCard;
