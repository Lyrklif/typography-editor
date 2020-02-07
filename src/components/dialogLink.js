import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';

import { restoreSelection } from '../functions/restoreSelection';

import mainStore from '../store/mainStore';
import { updStore, updStates, updSizes, updStyles } from '../actions/actionCreators';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dialogLink: !!+state.states.dialogLink,
    close: state.buttons.close,
    send: state.buttons.send,
  }
}


// панель редактирования
class DialogLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedText: '',
    }

    this.href = React.createRef();
  }

  // показать/скрыть диалог ввода ссылки
  switchDialogLink = (selectedText) => {
    updStates('dialogLink');

    this.setState({
      selectedText: selectedText
    });
  }

  // добавить ссылку
  addLinkUrl = (href) => {
    this.switchDialogLink(); // закрыть модальное окно

    // если выделенный ранее текст записан
    if (this.state.selectedText) {
      restoreSelection(this.state.selectedText); // восстановить выделение

      document.execCommand('createLink', false, href); // добавить ссылку

      this.setState(state => ({
        selectedText: ''
      }));
    }
  }


  render() {
    return (
      <Dialog
        open={this.props.dialogLink}
        onClose={this.switchDialogLink}
        aria-labelledby="form-dialog-link-url"
      >
        <DialogTitle id="form-dialog-link-url">Введите адрес ссылки</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="link-url"
            label="Адрес ссылки"
            type="url"
            ref={this.href}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.switchDialogLink} color="primary">
            {this.props.close}
          </Button>
          <Button onClick={() => this.addLinkUrl(this.href.current.lastChild.lastChild.value)} color="primary">
            {this.props.send}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}


export default connect(mapStateToProps)(DialogLink);