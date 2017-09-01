import React, {
    Component
} from "react";
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'whatwg-fetch';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
    constructor(props) {
        super(props);
        let defaultView = 'agenda';
        if (window.matchMedia('(min-width:768px)').matches) defaultView = 'month'
        this.state = {
            events: [],
            defaultView: defaultView
        };
    }

    async componentDidMount() {

        const eventsReq = await fetch('http://dev.andrewhill.io/wordpress/wp-json/wp/v2/events/');
        const eventsJson = await eventsReq.json();
        const events = eventsJson.map(event => {
            return {
                title: event.title.rendered,
                start: moment(event.acf.start_date),
                end: moment(event.acf.end_date),
                desc: event.acf.description
            }
        })

        this.setState({
            events
        })
    }

    render() {

        return ( <div className = "calendar-container" >
            <BigCalendar 
            events = {this.state.events}
            defaultView = {this.state.defaultView}
            /> 
            </div>
        );
    }

}

export default Calendar;