import React, { Component } from 'react';

import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';


class Form extends Component {
  inFormAddMusic = (e) => {
    e.preventDefault();
    let musicName = document.getElementById('musicName').value;
    this.props.addMusic(musicName);
  }
  contentStatus = () => {
    let length = this.props.length;
    if (length < 3) {
      return (
        <Box direction='row' justify='start' align='center' wrap={true} pad='medium' margin='small' colorIndex='light-1' a11yTitle={'Form'}>
          <form onSubmit={this.inFormAddMusic}>
            <Heading truncate={true} uppercase={true} strong={false}>
              Add Music
        </Heading>
            <FormField label='MUSIC NAME'>
              <TextInput id='musicName' />
            </FormField>
            <Box margin={{ 'vertical': 'medium' }}>
              <Button onClick={this.inFormAddMusic} id={this.props.status} label='Add' href="#" secondary={true} />
            </Box>
          </form>
        </Box>
      );
    } else {
      return ('');
    }
  }
  render() {
    return (
      <Animate leave={{
        "animation": "fade",
        "duration": 1000,
        "delay": 0
      }} enter={{
        "animation": 'fade',
        "duration": 1000,
        "delay": 0
      }} keep={true}>
        {this.contentStatus()}
      </Animate>
    );
  }
}


export default Form;
