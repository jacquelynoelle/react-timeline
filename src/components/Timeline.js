import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((post, index) => {
    return <TimelineEvent
      person={post.person}
      status={post.status}
      timestamp={post.timeStamp}
      key={index}
      />
  });

  return (
    <section className="timeline">
      {timelineComponents}
    </section>
  );
}

export default Timeline;
