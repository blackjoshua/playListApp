import React from 'react';

import Customheader from 'grommet/components/Header';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';

class Header extends React.Component {
  searchYoutube = () => {
    let val = document.getElementById('searchTerm').value;
    this.props.searchYoutube(val);
  }
  render() {
    return (<Animate leave={{
      "animation": "fade",
      "duration": 1000,
      "delay": 0
    }} enter={{
      "animation": 'fade',
      "duration": 1000,
      "delay": 0
    }} keep={true}>
      <Customheader>
        <Box flex={true} justify='end' direction='row' responsive={true}>
          <Search id="searchTerm" inline={true} fill={true} size='medium' placeHolder='Search Music' onDOMChange={this.searchYoutube} />
        </Box>
      </Customheader>
    </Animate>);
  }
}

export default Header;
