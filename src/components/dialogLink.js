// dialogLink

import React from "react";

import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextField from '@material-ui/core/TextField';

// панель редактирования
export default class DialogLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.isOpen;

    this.switchDialogLink = props.switchDialogLink;
    this.addLinkUrl = props.addLinkUrl;

    this.href = React.createRef();
  }


  render() {
    return (
      <Dialog
        open={this.props.isOpen ? true : false}
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
            Закрыть
          </Button>
          {/* <Button onClick={() => this.addLinkUrl(this.href.current.lastChild.lastChild.value)} color="primary"> */}
          <Button onClick={this.switchDialogLink} color="primary">
            Отправить
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
