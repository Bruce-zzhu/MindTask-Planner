import './Calendar.css'

import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!


import React, { Component } from 'react'

export default class Calendar extends Component {
    render() {
        return (
            <div class="calendar">
                <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'Project X', date: '2021-07-14' },
                        { title: 'Project Y', date: '2021-07-20' }
                      ]}
                />
            </div>
        )
    }
}
