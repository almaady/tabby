import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class ButtonText - Is a button that only contains text
 */
class ButtonIconText extends React.PureComponent {
  /**
   * @property {string} text -The text of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} className - Just in case you need another class
   * @property {string} color -  The color of the button
   * @property {string} type - Button type
   * @property {string} icon - Name of the icon
   * @property {string} iconColor - Color of the icon
   * @property {string} iconSize - Size of the icon, by default is 16px
   * @property {bool} iconRight - to define the position of the icon
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
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string.isRequired,
    iconSize: PropTypes.string,
    iconRight: PropTypes.bool,
    disabled: PropTypes.bool,
    borderColor: PropTypes.string
  };


  render() {
    const { color, onClick, text, className, type, iconColor, icon, iconSize, iconRight, disabled, borderColor } = this.props;
    return (
      <button
        className={classNames("btn", "btn__icon--text", `bg--${color}`, { "btn__icon--right": iconRight}, `border--${borderColor}`, className)}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        <Icon icon={icon} color={iconColor} size={iconSize}/>
        <p>{text}</p>
      </button>
    );
  }
}
ButtonIconText.defaultProps = {
  className: "",
  type: "button",
  iconSize: "R",
  iconRight: false,
  disabled: false,
  borderColor: ""
};

export default ButtonIconText;
