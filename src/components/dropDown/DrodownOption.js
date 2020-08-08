import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class DropDown- Is the option of the Dropdown
 */
class DropdownOption extends React.PureComponent {
  /**
   * @property {string} className - Just in case you need another class
   * @property {func} onClick - The function of the option
   * @property {string} iconDirection - Determines if the icon is on the left or rigth side
   * @property {string} text - The title of the option
   * @property {string} icon - The icon of the option
   */
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    iconDirection: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
  };

  render() {
    const {
      className,
      iconDirection,
      icon,
      text,
      onClick
    } = this.props;
    return (
      <div className={classNames("dropdown__option", className,{
          "dropdown__icon-right": iconDirection === "right"
        })}
        onClick={onClick}
      >
        {icon && <Icon icon={icon} size={"S"}/>}
        <p>{text}</p>
      </div>
    );
  }
}

DropdownOption.defaultProps = {
  className: "",
  iconDirection: "left",
  icon: ""
};
export default DropdownOption;
