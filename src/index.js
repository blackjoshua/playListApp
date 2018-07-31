import React from 'react';
import ReactDOM from 'react-dom';
import PlayListApp from './PlayListApp';
import firebase from 'firebase';
import 'grommet-css';

var config = {
  apiKey: "AIzaSyD_H2UBAjShBUaCWRs50jyfqO1oYmFeL9Q",
  authDomain: "playlist-project-202408.firebaseapp.com",
  databaseURL: "https://playlist-project-202408.firebaseio.com",
  projectId: "playlist-project-202408",
  storageBucket: "",
  messagingSenderId: "138759949226"
};
firebase.initializeApp(config);

ReactDOM.render(
  <PlayListApp />,
  document.getElementById('root')
);
