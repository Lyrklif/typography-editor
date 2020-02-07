import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-xcode";

import { updText } from '../actions/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    html: state.html,
  }
}


// Текст, который можно редактировать
class HTMLeditable extends React.Component {
  constructor(props) {
    super(props);
  }

  // записать новый текст
  setNewText = (newValue) => {
    // если в качестве параметра передан новый текст
    if (newValue && newValue !== this.props.html) {
      // записать новую версию текста
      updText(newValue);
    }
  }

  render() {
    return (
      <AceEditor
        placeholder="Html"
        mode="html"
        theme="xcode"
        name="blah2"
        onChange={this.setNewText}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.html}

        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} />
    );
  }
};

export default connect(mapStateToProps)(HTMLeditable);