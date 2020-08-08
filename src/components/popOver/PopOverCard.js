import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import ButtonIcon from "../buttons/ButtonIcon";
import PopOverHeader from "./PopOverHeader";
/**
 * @class PopOver Card - Is the card for the pop over and it contains a cross icon by default
 */
class PopOverCard extends React.PureComponent {
  /**
   * @property {bool} show - Determines if the pop over is visible
   * @property {func} onClose - The function to close the modal
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class
   * @property {string} title - The title of the pop over
   * @property {bool} back - Determines if the pop over has a back button
   * @property {func} onBack - The function to go back
   * @property {number} left - The value of the left position of the pop over card
   * @property {number} top - The value of the top position of the pop over card
   */
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    onBack: PropTypes.func,
    back: PropTypes.bool,
    className: PropTypes.string,
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };

  render() {
    const {
      onClose,
      children,
      className,
      show,
      title,
      onBack,
      back,
      left,
      top
    } = this.props;
    return (
      <div
        style={{
          left,
          top
        }}
        className={classNames("pop-over", className, {
          "visibility-hidden": !show
        })}
      >
        <div className="icons">
          <ButtonIcon
            icon="left"
            onClick={onBack}
            className={classNames({ "visibility-hidden": !back })}
            size="R"
          />
          <PopOverHeader title={title} />
          <ButtonIcon 
            icon="cross" 
            size="R"
            onClick={onClose} />
        </div>
        <div className="pop-over--content">{children}</div>
      </div>
    );
  }
}

PopOverCard.defaultProps = {
  className: "",
  title: "",
  back: false,
  onBack: null,
  left: "",
  top: ""
};

export default PopOverCard;
