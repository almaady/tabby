import React from "react";
import PropTypes from "prop-types";

/**
 * @class Modal Background - Is the layer of color under the modal, you can choose the color
 */
class ModalBackground extends React.PureComponent {
  /**
   * @property {func} onClose -The function to close the modal
   */
  static propTypes = {
    onClose: PropTypes.func.isRequired
  };

  componentDidMount() {
    // add Key listener when key ESC is pressed
    document.addEventListener("keydown", this.handleEscPressed);
  }

  componentWillUnmount() {
    // remove Key listener when key ESC is pressed
    document.removeEventListener("keydown", this.handleEscPressed);
  }

  /**
   * @function handleEscPressed to close the modal with the ESC key
   */
  handleEscPressed = event => {
    const { onClose } = this.props;
    // keyCode 27 = ESC key
    if (event.keyCode === 27) {
      onClose();
    }
  };

  render() {
    const { onClose } = this.props;
    return (
      <div
        className="modal--background"
        onClick={onClose}
        role="presentation"
      />
    );
  }
}

export default ModalBackground;
