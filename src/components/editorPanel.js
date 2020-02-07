import React from "react";

import TagsPanel from "./TagsPanel";
import ButtonsPanel from "./ButtonsPanel";
import MainSettingsPanel from "./MainSettingsPanel";
import DialogLink from "./DialogLink";
import ColorPanel from "./ColorPanel";
import ColorPickerModal from "./ColorPickerModal";

import Divider from "@material-ui/core/Divider";
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';


function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


// панель редактирования
class EditorPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ElevationScroll>
        <AppBar
          component={'header'}
          position="fixed"
          color="inherit"
        >
          <h2 className="meta-title">Панель редактирования</h2>

          <Paper className={"editor-panel-wp editor-panel__inner"}>
            <Tabs
              aria-label="outlined primary button li group"
              className={"scrollbar--center"}
              orientation="horizontal"
              variant="scrollable"
              value={0}
            >

              <MainSettingsPanel /> {/* основные настройки */}
              <Box><Divider orientation="vertical" /></Box>

              <ButtonsPanel /> {/* панель с кнопками */}
              <Box><Divider orientation="vertical" /></Box>

              <ColorPanel className="box-margin" />
            </Tabs>

            <Divider />
            <TagsPanel />  {/* панель тегов */}

            <ColorPickerModal /> {/* modal выбора цвета */}
            <DialogLink /> {/* modal ввода href для ссылки */}

          </Paper>
        </AppBar>
      </ElevationScroll>
    );
  }
}

export default EditorPanel;