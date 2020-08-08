import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../icons/Icon";

class ToggleButton extends React.PureComponent {
  /**
   * @property {string} icon -The icon of the button
   * @property {func} onClick - The function triggered by the button
   * @property {string} backgroundColor -  The color of the background
   * @property {string} onLabel - Text to explain the "on" state
   * @property {bool} offLabel - Text to explain the "off" state
   * @property {bool} toggleState - The state of the button
   * @see See './../../../styles/variables/_colors. scss' for the list of color names
   */
  static propTypes = {
    icon: PropTypes.string,
    backgroundColor: PropTypes.string,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    toggleState: PropTypes.bool,
    onClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    backgroundColor: "blue",
    onLabel: "",
    offLabel: "",
    icon: "",
    toggleState: true
  };

  state = {
    toggleState: this.props.toggleState
  };

  toggle = () => {
    const { toggleState } = this.state;
    const newState = !toggleState;
    this.setState({
      toggleState: newState
    });
    return newState;
  };

  onClickToggle = () => {
    const { onClick } = this.props;
    const actualState = this.toggle();
    onClick(actualState);
  };

  render() {
    const { icon, backgroundColor, onLabel, offLabel } = this.props;
    const { toggleState } = this.state;

    return (
      <div className="toggleButton--container">
        <p>{offLabel}</p>
        <div
          className={classNames("toggle--outside", `bg--${backgroundColor}`, {
            "toggle--off": !toggleState
          })}
        >
          <button
            type="button"
            className="toggle--inside"
            onClick={this.onClickToggle}
          >
            <Icon icon={icon} color={backgroundColor} size="R" />
          </button>
        </div>
        <p>{onLabel}</p>
      </div>
    );
  }
}

export default ToggleButton;
