import React from 'react';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    editText: !!+state.states.editText,
    fontSize: state.styles.fontSize,
    lineHeight: state.styles.lineHeight,
    html: state.html,
  }
}

// Текст, который можно редактировать
class ContentEditable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let createContent = () => {
      return { __html: this.props.html };
    }
    return (
      <div
        tabIndex={this.props.editText ? '0' : null}
        contentEditable={this.props.editText}
        suppressContentEditableWarning={true} // чтобы убрать в консоли предупреждение о contentEditable
        className={this.props.editText ? 'content print edit' : 'print content'}
        dangerouslySetInnerHTML={createContent()} // вставить переданный текст
        style={{
          fontSize: `${this.props.fontSize}px`,
          lineHeight: `${this.props.lineHeight}em`
        }}
      >
      </div>
    );
  }
};


export default connect(mapStateToProps)(ContentEditable);