import React from 'react'

import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';

class Detail extends React.Component {
  render() {
    const selectedMusic = this.props.selectedMusic.map(item => {
      return (
        <Animate key={item.id} leave={{ "animation": "fade", "duration": 1000, "delay": 0 }} enter={{
          "animation": 'fade',
          "duration": 1000,
          "delay": 0
        }} keep={true}>
          <div>
            {item.id} => {item.musicName}
          </div>
        </Animate>
      );
    });
    return (
      <Animate enter={{
        "animation": 'fade',
        "duration": 1000,
        "delay": 0
      }} keep={true}>
        <Box align={'center'} colorIndex="neutral-1">
          {selectedMusic}
        </Box>
      </Animate>
    );
  }
}

export default Detail;
