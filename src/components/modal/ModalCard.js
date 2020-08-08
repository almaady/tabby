import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonIcon from "../buttons/ButtonIcon";
/**
 * @class ModalCard - Is the card for the modals and it contains a cross icon by default
 */
class ModalCard extends React.PureComponent {
  /**
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   */
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { onClose, children, className } = this.props;
    return (
      <div className={classNames("modal", className)}>
        <div className="icons">
          <ButtonIcon icon="cross" color="gray-l2" size="L" onClick={onClose} />
        </div>
        <div className="modal--content">{children}</div>
      </div>
    );
  }
}

ModalCard.defaultProps = {
  className: ""
};
export default ModalCard;
