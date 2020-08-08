import React from "react";
import PropTypes from "prop-types";
/**
 * @class Modal Header - Is the title of the modal
 */
class ModalHeader extends React.PureComponent {
  /**
   * @property {string} title - Title of the modal
   */
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="modal--header">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default ModalHeader;
