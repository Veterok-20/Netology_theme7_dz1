import React, { Component, useState } from 'react';


export default function DateTimePretty(Component, propdate) {
    return class extends React.Component {

        render() {

            let date = new Date(propdate);           
            date = date.getTime();           

            let currentdate = new Date();           
            currentdate = currentdate.getTime();
           
            let text = '';

            if (currentdate - date <= 60 * 60 * 1000) {                
                text = "12 минут назад";
            }
            else {
                if (currentdate - date < 24 * 60 * 60 * 1000) {                    
                    text = "5 часов назад";
                }
                else {                   
                    let x = Math.floor((currentdate - date) / (24 * 3600000));                   
                    text = x + " дней назад";
                }
            }


            return <Component date={text} />
        }
    }
}