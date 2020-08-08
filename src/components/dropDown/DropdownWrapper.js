import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Dropdown from "./Dropdown";
import ButtonIcon from "../buttons/ButtonIcon";
/**
 * @class DropDownWrapper -It contains the Dropdown and the Button Icon that triggers it
 */
class DropdownWrapper extends React.PureComponent {
  /**
   * @property {node} children - The content of the dropdown
   * @property {string} className - Just in case you need another class
   * @property {string} icon - The icon that triggers the dropdown
   * */

  static propTypes = {
    icon: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    size: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.activatorRef = React.createRef();
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  toggleDropDown = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  onClose = () => {
    this.setState({
      show: false
    });
  };

  handleClickOutside = event => {
    const { show } = this.state;
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target) &&
      show
    ) {
      this.setState({
        show: false
      });
    }
  };

  render() {
    const { children, className, icon, size } = this.props;

    return (
      <div className={classNames("dropdown__wrapper", className)} ref={this.dropdownRef}>
        <div ref={this.activatorRef} id="activator-dropdown">
          <ButtonIcon icon={icon} onClick={this.toggleDropDown} size={size} />
        </div>
        {this.state.show && 
          <Dropdown onClose={this.onClose} className={className}>
            {children}
          </Dropdown>
        }
      </div>
    );
  }
}

DropdownWrapper.defaultProps = {
  className: "",
  size: "R",
  icon: "options"
};

export default DropdownWrapper;
