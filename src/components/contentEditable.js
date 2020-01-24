import React from 'react';


// Текст, который можно редактировать
export default class ContentEditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;

    this.onBlur = this.props.onBlur;
    this.onChange = this.props.onChange;
  }

  render() {
    let createContent = () => {
      return { __html: this.props.param.html };
    }
    return (
      <div
        tabIndex="0"
        contentEditable={this.props.param.states.editText ? 'true' : 'false'}
        suppressContentEditableWarning={true} // чтобы убрать в консоли предупреждение о contentEditable
        className={this.props.param.states.editText ? 'content edit' : 'content'}
        onBlur={this.onBlur} // событие при потере фокуса 
        dangerouslySetInnerHTML={createContent()} // вставить переданный текст
        style={{
          fontSize: `${this.props.param.styles.fontSize}px`,
          lineHeight: `${this.props.param.styles.lineHeight}em`
        }}
      >
      </div>
    );
  }
};