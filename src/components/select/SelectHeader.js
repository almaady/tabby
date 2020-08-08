import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ButtonIcon from "../buttons/ButtonIcon";
import Icon from "../icons/Icon";

/**
 * @class SelectHeader - It is the title of the select
 */
class SelectHeader extends React.PureComponent {
  /**
   * @property {string} icon - The icon of the Header
   * @property {string} title - The title of the header
   * @property {string} className - ClassName if you need to customize
   * @property {func} onClick - The function to open the Select List
   * @property {bool} listOpen - Determines if the Select List is visible
   */
  static propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    listOpen: PropTypes.bool
  };

  render() {
    const { className, icon, title, onClick, listOpen } = this.props;

    return ( 
      <div className={classNames('select__header', className)} onClick={onClick}>
        {icon && <Icon icon={icon} color="not-gray-l2" size="R" />}
        <p>{title}</p>
        <ButtonIcon icon={listOpen ? "top" : "down"} color="not-gray-l1" size="XXS" onClick={()=>{}}/>
      </div>
    );
  }
}

SelectHeader.defaultProps = {
  icon: "",
  className: "",
  listOpen: false
};

export default SelectHeader