import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-xcode";

import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';

// Текст, который можно редактировать
export default class HTMLeditable extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.props.onChange;
  }

  render() {
    return (
      <AceEditor
        placeholder="Html"
        mode="html"
        theme="xcode"
        name="blah2"
        onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.param.html}

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