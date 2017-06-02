import {Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {CalendarComponent} from 'angular2-fullcalendar/src/calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
})
export class AppCalendarComponent implements OnInit, OnChanges {

  @ViewChild(CalendarComponent) appCalendar: CalendarComponent;

  @Input() events: Object;
  public calendarOptions: Object = {
    height: 'auto',
    fixedWeekCount: false,
    editable: true,
    eventLimit: true,
    // events: [
    //   {
    //     title: 'All Day Event',
    //     start: '2017-06-01'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2017-06-07'
    //   },
    //   {
    //     title: 'Long Event',
    //     start: '2017-06-17'
    //   },
    //   ]
  };

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['events']) {
      this.appCalendar.fullCalendar('addEventSource', this.events);
      this.appCalendar.fullCalendar('refetchEvents');
      // this.calendarOptions['events'] = this.events;
      // this.appCalendar.fullCalendar('removeEvents');
      // this.appCalendar.fullCalendar('refetchEventSources', this.events);
      // this.appCalendar.fullCalendar('refetchEvents');
      // console.log('this.events', this.events);
      console.log('ee', this.appCalendar.fullCalendar('getEventSources'));

    }
  }

}
