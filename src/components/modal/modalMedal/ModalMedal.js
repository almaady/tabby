// Modal Medal
import React from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";
import ModalHeader from "../ModalHeader";
import ModalFooter from "../ModalFooter";
import ButtonText from "../../buttons/ButtonText";

/**
 * @Class Modal Medal - Is the modal for the Medals, it has its own style, but shares the Modal component
 */
class ModalMedal extends React.PureComponent {
  /**
   * @property {bool} show - Determines if the modal is visible
   * @property {func} onClose - The function to close the modal
   * @property {node} children - Medals, could be more than one
   * @property {string} title - The title of the medal
   * @property {string} message - The message of the modal
   * @property {string} btnText - The text of the button
   * @property {string} btnColor - The color of the button, it's blue by default
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
   */
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    btnColor: PropTypes.string
  };

  render() {
    const {
      show,
      onClose,
      children,
      title,
      btnText,
      btnColor,
      message
    } = this.props;
    return (
      <Modal show={show} className="modal--medal" onClose={onClose}>
        <div className="medals">
          {React.Children.map(children, child => child)}
        </div>
        {/** Starts stars animation */}
        <div className="stars--container">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>
        {/** Ends stars animation */}
        <ModalHeader title={title} />
        <p>{message}</p>
        <ModalFooter>
          <ButtonText text={btnText} color={btnColor} onClick={onClose} />
        </ModalFooter>
      </Modal>
    );
  }
}
ModalMedal.defaultProps = {
  btnColor: "blue"
};
export default ModalMedal;
