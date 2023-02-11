import React, {useState} from 'react';
import DateTime from './DateTime';
import DateTimePretty from './DateTimePretty';


export default function Video(props) {
    const WithTextDate = DateTimePretty(DateTime, props.date);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            {/* <DateTime date={props.date} /> */}
            
            < WithTextDate date={props.date} />
        </div>
    )
}