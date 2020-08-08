import React from "react";
import PropTypes from "prop-types";

/**
 * @class Icon - Is the component to use icons from our font-icon
 */
class Icon extends React.PureComponent {
  /**
   * @property {string} icon - The function to close the modal
   * @property {string} size - to define icon's size
   * @property {string} color - To define icon's color
   */
  static propTypes = {
    icon: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string
  };

  render() {
    const { icon, size, color } = this.props;
    return <i className={`icon-${icon} color--${color} size--${size} icon--height`} />;
  }
}

Icon.defaultProps = {
  size: "XXL",
  color: "gray-l1",
  icon:'cross'
};

export default Icon;
