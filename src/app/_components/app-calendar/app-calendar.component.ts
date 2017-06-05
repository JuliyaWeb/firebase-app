import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './app-calendar.component.html',
})
export class AppCalendarComponent implements OnInit, OnChanges {

  @ViewChild(CalendarComponent) appCalendar: CalendarComponent;

  @Input() events: Object;

  public calendarOptions: Object;

  ngOnInit() {
    this.calendarOptions = {
      height: 'auto',
      fixedWeekCount: false,
      editable: false,
      eventLimit: 1,

      events: this.events
    };
      this.appCalendar.fullCalendar('clientEvents', function(){console.log('click')});
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['events']) {
      this.appCalendar.fullCalendar('removeEvents');
      this.appCalendar.fullCalendar('renderEvents', this.events);
    }
  }

}
