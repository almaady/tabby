import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

/**
 * @class DropDown- It contains the list of options
 */
class Dropdown extends React.PureComponent {
  /**
   * @property {node} children - The content of the modal
   * @property {string} className - Just in case you need another class

   */
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };

  render() {
    const { children, className} = this.props;
    return (
      <div
        className={classNames("dropdown__list", className)}
      >
        {children}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  className: ""
};
export default Dropdown;
