import React from "react";
import PropTypes from "prop-types";
/**
 * @class PopOver Header - Is the title of the pop over
 */
class PopOverHeader extends React.PureComponent {
  /**
   * @property {string} title - Title of the pop over
   */
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;
    return (
      <div className="pop-over--header">
        <h2>{title}</h2>
      </div>
    );
  }
}

export default PopOverHeader;
