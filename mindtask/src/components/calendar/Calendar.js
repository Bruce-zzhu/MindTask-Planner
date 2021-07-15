import './Calendar.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


import React, { Component } from 'react'

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        const events = [
            // Deafault Events for demo
            { title: 'Project X', date: '2021-07-14', backgroundColor: '#65BF73', borderColor: '#65BF73' },
            { title: 'Project Y', date: '2021-07-20', backgroundColor: '#FBB371', borderColor: '#FBB371' }
        ];
        // Get projects from localStorage, put them on calendar

        const projects = JSON.parse(localStorage.getItem('projects'));
        projects.map(ele => {
            const defaultColor = "#FF5A43"
            if(ele.date) {
                const newEvent = {title: ele.name, date: ele.date}

                newEvent['backgroundColor'] = ele.color ? ele.color : defaultColor;
                newEvent['borderColor'] = ele.color ? ele.color : defaultColor;;

                events.push(newEvent);
            }
        })

        this.state = {
            events: events,
        }

    }
    render() {
        return (
            <div class="calendar">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={this.state.events}
                />
            </div>
        )
    }
}
