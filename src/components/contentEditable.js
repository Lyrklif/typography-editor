import React from 'react';


// Текст, который можно редактировать
export default class ContentEditable extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.param;
  }

  render() {
    let createContent = () => {
      return { __html: this.props.param.html };
    }
    return (
      <div
        tabIndex={this.props.param.states.editText ? '0' : null}
        contentEditable={this.props.param.states.editText ? 'true' : 'false'}
        suppressContentEditableWarning={true} // чтобы убрать в консоли предупреждение о contentEditable
        className={this.props.param.states.editText ? 'content edit' : 'content'}
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