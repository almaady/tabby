import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";
import Input from "./Input";

/**
 * @class Input - It is an html input
 */
class InputIcon extends React.PureComponent {
  /**
   * @property {string} name -The name of the input
   * @property {string} type - The type of the input
   * @property {string} placeholder- The placeholder of the input
   * @property {func} onBlur - The function triggered when the input is onBlur
   * @property {func} onChange - The function triggered when the input value change
   * @property {bool} showError - Determines if the input should add an error style
   * @property {string} defaultValue - The Default Value of the input
   * @property {func} innerRef - The function to create a Ref for the input
   * @property {string} autoComplete - To enable autocomplete
   * @property {bool} autoFocus - Makes the input focusable when is showed on the screen
   */
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    showError: PropTypes.bool,
    defaultValue: PropTypes.string,
    innerRef: PropTypes.func,
    autoComplete: PropTypes.string,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    iconSize: PropTypes.string,
    autoFocus: PropTypes.bool
  };

  render() {
    const {
      innerRef,
      name,
      type,
      placeholder,
      showError,
      onChange,
      onBlur,
      defaultValue,
      autoComplete,
      icon,
      iconColor,
      iconSize,
      autoFocus
    } = this.props;
    return (
      <div className="input__icon--container">
        <Icon color={iconColor} icon={icon} size={iconSize}/>
        <Input 
          innerRef={innerRef}
          autoComplete={autoComplete}
          name={name}
          type={type}
          placeholder={placeholder}
          className={classNames({ "input__error": showError }, "input")}
          onChange={onChange}
          onBlur={onBlur}
          defaultValue={defaultValue}
          autoFocus={autoFocus}
        />
      </div>
    );
  }
}
InputIcon.defaultProps = {
  placeholder: "",
  defaultValue: "",
  innerRef: () => {},
  autoComplete: "off",
  iconColor: "gray-l2",
  iconSize: "R",
  showError: false,
  autoFocus: false
};

export default InputIcon;
