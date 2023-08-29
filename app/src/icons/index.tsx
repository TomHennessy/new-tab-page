import React from 'react';

import { default as GitHub } from './github';
import { default as Notion } from './notion';
import { default as VideoCamera } from './video-camera';
import { default as Tasks } from './tasks';
import { default as Missing } from './missing';
import { default as Calendar } from './calendar';

export { GitHub, Notion, VideoCamera, Tasks, Missing, Calendar }

export default ({ icon }) => {
  switch (icon) {
    case 'github':
      return <GitHub />
    case 'notion':
      return <Notion />
    case 'video-camera':
      return <VideoCamera />
    case 'tasks':
      return <Tasks />
    case 'calendar':
      return <Calendar />
    default:
      return <Missing />
  }
}