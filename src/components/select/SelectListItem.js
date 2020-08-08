import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

/**
 * @class SelectListItem - Is an option of the SelectList
 */
class SelectListItem extends React.PureComponent {
  /**
   * @property {string} icon - The icon of the option
   * @property {string} title - The title of the option
   * @property {string} className - ClassName if you need to customize
   * @property {string} selectedValue - Is the selected value of the select list
   * @property {func} onClick - The function to select an option
   * @property {string} id - The id of the option
   * @property {string} value - The value of the option
   */

  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    selectedValue: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  render() {
    const { className, selectedValue, title, icon, onClick, id, value } = this.props;

    return (
      <li
        className={classNames(className, { "selected__item": selectedValue === value })}
        onClick={onClick}
        data-value={value}
      >
        {icon && <Icon icon={icon} color="gray-l2" size="R" />}
        {title}
      </li>
    );
  }
}

SelectListItem.defaultProps = {
  icon: "",
  className: "",
  selectedValue: ""
};

export default SelectListItem;
