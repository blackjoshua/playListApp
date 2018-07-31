import React, { Component } from "react";
//import socketioclient from 'socket.io-client';
import shortId from "shortid";
import firebase from 'firebase';

import Header from "./Header";
import GrommetApp from "grommet/components/App";
import Box from "grommet/components/Box";
import Section from "grommet/components/Section";
import Animate from "grommet/components/Animate";
import Form from "./Form";
import Detail from "./detailMusic";
import ListPlayList from "./ListPlayList";
import YouTube from "react-youtube";

class PlayListApp extends Component {
  constructor(){
    super();
    this.database = firebase.database().ref().child('blog');
  }
  state = {
    playList: [],
    selectedMusic: []
    /*,
    serverHost: 'http://localhost:4001'*/
  };
  addMusic = val => {
    if (val === "") {
    } else {
      let addMusic = this.state.playList;
      addMusic.push({ musicName: val, id: shortId.generate() });
      this.setState({ playList: addMusic });
      //const socket = socketioclient(this.state.serverHost);
      //socket.emit('listMusic', this.state.playList);
    }
  };
  delMusic = id => {
    if (id === "") {
    } else {
      this.setState({
        playList: this.state.playList.filter(item => item.id !== id),
        selectedMusic: this.state.selectedMusic.filter(item => item.id !== id)
      });
      //const socket = socketioclient(this.state.serverHost);
      //socket.emit('listMusic', this.state.playList.filter(item => item.id !== id));
    }
  };
  detailMusic = id => {
    let detailMusic = this.state.playList.filter(item => item.id === id);
    this.setState({ selectedMusic: detailMusic });
  };
  randomMusic = () => {
    if (this.state.playList.length >= 3) {
      const opts = {
        height: "600",
        width: "600",
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          fs: 0
        }
      };
      let random = Math.floor(Math.random() * this.state.playList.length);
      let randomId = this.state.playList[random].musicName;
      //const socket = socketioclient(this.state.serverHost);
      //socket.emit('listMusic', this.state.playList[random].musicName);
      return (
        <Animate
          leave={{
            animation: "fade",
            duration: 1000,
            delay: 0
          }}
          enter={{
            animation: "fade",
            duration: 1000,
            delay: 0
          }}
          keep={true}>
          <YouTube
            videoId={randomId}
            opts={opts}
            onReady={this._onReady}
            onEnd={this.finishMusic}
          />
        </Animate>
      );
    }
  };
  finishMusic = () => {
    this.setState({ playList: [], selectedMusic: [] });
    //const socket = socketioclient(this.state.serverHost);
    //socket.emit('listMusic', this.state.playList = []);
  };
  searchYoutube = val => {
    let searchResult = this.state.playList.filter(item => item.musicName.indexOf(val) !== -1);
    console.log(searchResult);
  };
  render() {
    /*const socket = socketioclient(this.state.serverHost);
    socket.on('listMusic', (list) => {
      this.setState({playList: list});
    });*/
    return (
      <Animate
        enter={{
          animation: "fade",
          duration: 1000,
          delay: 0
        }}
        keep={true}>
        <GrommetApp centered={true}>
          <Detail selectedMusic={this.state.selectedMusic} />
          <Section
            alignContent={"center"}
            responsive={true}
            pad="large"
            justify="center"
            align="center"
            colorIndex="neutral-2">
            <Header searchYoutube={this.searchYoutube} />
            <Box
              direction="row"
              justify="start"
              align="center"
              wrap={true}
              pad="medium"
              margin="small">
              <Form
                length={this.state.playList.length}
                status={this.state.status}
                addMusic={this.addMusic} />
              <ListPlayList
                detailMusic={this.detailMusic}
                delMusic={this.delMusic}
                playList={this.state.playList} />
            </Box>
            {this.randomMusic()}
          </Section>
        </GrommetApp>
      </Animate>
    );
  }
}

export default PlayListApp;
