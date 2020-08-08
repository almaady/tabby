import React from "react";
import PropTypes from "prop-types";

/**
 * @class Modal Footer - Is the footer of the modal
 */
export default class ModalFooter extends React.PureComponent {
  /**
   * @property {node} children - The content of the footer
   */
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children } = this.props;
    return <div className="modal--footer">{children}</div>;
  }
}
