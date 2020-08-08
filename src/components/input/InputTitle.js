import React from "react";

import PropTypes from "prop-types";

import autosize from "autosize";

import classNames from "classnames";

/**
 * @class InputTitle - It is an input for titles where they look as text
 */
class InputTitle extends React.PureComponent {
    /**
   * @property {string} placeholder -The placeholder of the input
   * @property {string} className - The type of the input
   * @property {string} initialText- The placeholder of the input
   * @property {number} maxLength - The number of characters
   * @property {bool} readOnly - Determines if you can edit text
   */
  static propTypes = {
    initialText: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onTextEdited: PropTypes.func.isRequired,
    allowBlank: PropTypes.bool.isRequired,
    resetOnFinish: PropTypes.bool.isRequired,
    maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    readOnly: PropTypes.bool.isRequired
  };
  constructor(props) {
    super(props);

    this.state = {
      text: props.initialText
    };

    this.textInput = null;
  }

  setTextInputRef = element => {
    this.textInput = element;
  };

  setTextTrim = () => {
    if (!this.props.allowBlank && this.textInput.value.trim() === "") {
      return;
    }

    this.setState({
      text: this.textInput.value.trim()
    });

    this.props.onTextEdited(this.textInput.value.trim());

    if (this.props.resetOnFinish) {
      this.textInput.value = "";
    }
  };

  onKeyDown = event => {
    if (event.keyCode === 13) {
      this.textInput.blur();
      event.preventDefault();
    }

    autosize(this.textInput);
  };

  componentDidMount() {
    autosize(this.textInput);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.initialText !== this.props.initialText) {
      this.textInput.value = this.props.initialText;
      autosize(this.textInput)
    }
  }

  render() {
    const {
      placeholder,
      className,
      initialText,
      maxLength,
      readOnly
    } = this.props;
    return (
      <textarea
        placeholder={placeholder}
        onBlur={this.setTextTrim}
        className={classNames("textarea__edition", className)}
        ref={this.setTextInputRef}
        onKeyDown={this.onKeyDown}
        maxLength={maxLength}
        defaultValue={initialText}
        rows="5"
        readOnly={readOnly}
      />
    );
  }
}

InputTitle.defaultProps = {
  allowBlank: true,
  resetOnFinish: false,
  readOnly: false,
  maxLength: "",
  className: "",
  placeholder: "",
  initialText: ""
};

export default InputTitle;
