import React, { Component } from "react";

import Heading from "grommet/components/Heading";
import List from "grommet/components/List";
import ListItem from "grommet/components/ListItem";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";
import Actions from "grommet/components/icons/base/Actions";
import Info from "grommet/components/icons/base/CircleInformation";
import Del from "grommet/components/icons/base/Close";
import Animate from "grommet/components/Animate";
import Box from "grommet/components/Box";

class ListPlayList extends Component {
  render() {
    const randomList = [
      "fade",
      "slide-up",
      "slide-down",
      "slide-left",
      "slide-right"
    ];
    let random = Math.floor(Math.random() * randomList.length);
    const playList = this.props.playList.map(item => {
      return (
        <Animate
          key={item.id}
          enter={{
            animation: randomList[random],
            duration: 1000,
            delay: 0
          }}
          keep={true}>
          <List>
            <ListItem justify="between" separator="horizontal">
              <span>{item.musicName}</span>
              <span className="secondary">
                <Menu
                  responsive={true}
                  inline={false}
                  icon={<Actions />}
                  primary={false}
                  closeOnClick={false}>
                  <Anchor
                    icon={<Info />}
                    onClick={() => this.props.detailMusic(item.id)}
                    primary={false} />
                  <Anchor
                    icon={<Del />}
                    onClick={() => this.props.delMusic(item.id)} />
                </Menu>
              </span>
            </ListItem>
          </List>
        </Animate>
      );
    });
    return (
      <Box
        direction="row"
        justify="start"
        align="center"
        wrap={true}
        pad="medium"
        margin="small"
        colorIndex="light-1"
        a11yTitle={"List"}>
        <Animate
          enter={{
            animation: "fade",
            duration: 1000,
            delay: 0
          }}
          keep={true}>
          <div>
            <Heading truncate={true} uppercase={true} strong={false}>
              Music List
            </Heading>
            {playList}
          </div>
        </Animate>
      </Box>
    );
  }
}

export default ListPlayList;
