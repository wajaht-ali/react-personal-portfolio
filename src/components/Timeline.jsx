import React from 'react'
import data from '../assets/data.json';
const Timeline = () => {
  return (
    <div id='timeline'>
        <div id="timelinebox">

            <div className="timeLineItem leftTimeline">
            <h2>TECHY STAR</h2>
            <p>07/10/2022</p>
            </div>

            <div className="timeLineItem  rightTimeline">
            <h2>XCRYPTP</h2>
            <p>07/10/2022</p>
            </div>

            <div className="timeLineItem leftTimeline">
            <h2>PORTFOLIO</h2>
            <p>07/10/2022</p>
            </div>

            <div className="timeLineItem rightTimeline">
            <h2>VIDEO HUB</h2>
            <p>07/10/2022</p>
            </div>

            <div className="timeLineItem leftTimeline">
            <h2>REACT CART</h2>
            <p>07/10/2022</p>
            </div>
            {/* {
                data.projects.map((item, index) => (
                    <TimelineItem 
                    heading={item.title}
                    text = {item.date}
                    index = {index}
                    />
                ))
            }; */}
        </div>
    </div>
  )
}

// const TimelineItem = ({heading, text, index}) => (
//     <div 
//     //" '${ '}' "
//     className={'timelineItem  ${ index % 2 === 0 ? "leftTimeline" : "rightTimeline"}'}>
        
//         <div>
//         <h2>{heading}</h2>
//         <p>{text}</p>
//         </div>
//     </div>
// )
export default Timeline;