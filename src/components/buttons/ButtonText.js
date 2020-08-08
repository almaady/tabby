import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class ButtonText - Is a button that only contains text
 */
class ButtonText extends React.PureComponent {
  /**
   * @property {string} text -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} color -  The color of the button
   * @property {string} type - Button type
   * @property {bool} disabled - Button could be disabled
   * @property {string} borderColor - Button could have a border color
   * @see See './../../../styles/variables/_colors.scss' for the list of color names
   */
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    borderColor: PropTypes.string
  };


  render() {
    const { color, onClick, text, className, type, disabled, borderColor } = this.props;
    return (
      <button
        className={classNames("btn", "btn--text", `bg--${color}`, `border--${borderColor}`,className)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <p>{text}</p>
      </button>
    );
  }
}
ButtonText.defaultProps = {
  className: "",
  type: "button",
  disabled: false,
  borderColor: ""
};

export default ButtonText;
