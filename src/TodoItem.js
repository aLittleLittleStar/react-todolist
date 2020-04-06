import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { content } = this.props;
    return (
      <div
        onClick={this.handleClick}>
        {content}
      </div>
    )
    
  }

  /*点击元素 */
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }

}
export default TodoItem;