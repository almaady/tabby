import React from "react";
import PropTypes from "prop-types";
/**
 * @Class Medal - The image of the medal
 */
class Medal extends React.PureComponent {
  /**
   * @property {string} medalSrc - Medal URL
   */
  static propTypes = {
    medalSrc: PropTypes.string.isRequired
  };

  render() {
    const { medalSrc } = this.props;
    return <img alt="Medal" src={medalSrc} />;
  }
}

export default Medal;
