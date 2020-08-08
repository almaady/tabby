/* eslint-disable react/sort-comp */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import SelectHeader from "./SelectHeader";
import SelectList from "./SelectList";

/**
 * @class Select - It is the wrapper for the Select Header and the Select List
 */
class Select extends React.PureComponent {
  /**
   * @property {array} options - List of options
   * @property {string} placeholder - Placeholder for the select
   * @property {string} icon - Name of the icon if the placeholder needs one
   * @property {string} className - ClassName if you need to customize
   * @property {func} onSelect - Function triggered by the item
   */
  constructor(props) {
    super(props);
    const { selectedValue } = this.props;
    this.selectRef = React.createRef();
    this.state = {
      listOpen: false,
      selectedValue
    };
  }

  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    selectedValue: PropTypes.string
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  };

  handleClickOutside = event => {
    const { listOpen } = this.state;
    if (
      this.selectRef.current &&
      !this.selectRef.current.contains(event.target) &&
      listOpen
    ) {
      this.setState({
        listOpen: false
      });
    }
  };

  getSelectedItem = value => {
    const { options } = this.props;
    const item = options.find(_item => _item.value === value);
    return item;
  };

  _setItemSelected = itemValue => {
    this.setState({
      selectedValue: itemValue
    });
  };

  selectItemByValue = itemValue => {
    const item = this.getSelectedItem(itemValue);
    this._setItemSelected(itemValue);
    this.props.onSelect(item);
    this.toggleList();
  };

  selectItem = event => {
    const itemValue = event.target.dataset.value;
    this.selectItemByValue(itemValue);
  };

  componentDidUpdate(prevProps) {
    const { selectedValue } = this.props;
    if (prevProps.selectedValue !== selectedValue) {
      this._setItemSelected(selectedValue);
    }
  }

  render() {
    const { className, options, icon, placeholder } = this.props;
    const { listOpen, selectedValue } = this.state;
    const selectedItem = this.getSelectedItem(selectedValue);

    return (
      <div
        className={classNames("select__wrapper", className)}
        ref={this.selectRef}
      >
        <SelectHeader
          title={selectedItem ? selectedItem.title : placeholder}
          icon={selectedItem ? selectedItem.icon : icon}
          onClick={this.toggleList}
          listOpen={listOpen}
        />
        {listOpen && (
          <SelectList
            options={options}
            onClick={this.selectItem}
            selectedValue={selectedValue}
          />
        )}
      </div>
    );
  }
}

Select.defaultProps = {
  className: "",
  icon: "",
  selectedValue: ""
};

export default Select;
