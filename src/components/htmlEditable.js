import React from 'react';


// Текст, который можно редактировать
export default class HTMLeditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.onBlur = this.props.onBlur;
    this.onChange = this.props.onChange;
  }

  render() {
    return (
      <pre>
        <code
          tabIndex="0"
          contentEditable={this.props.param.states.editText ? 'true' : 'false'}
          suppressContentEditableWarning={true} // чтобы убрать в консоли предупреждение о contentEditable
          className={this.props.param.states.editText ? 'content edit' : 'content'}
          onChange={this.onChange} // 
          onBlur={this.onBlur} // событие при потере фокуса 
        >
          {this.props.param.html}
        </code>
      </pre>
    );
  }
};