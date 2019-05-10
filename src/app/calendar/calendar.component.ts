import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent, DAYS_OF_WEEK, CalendarView } from 'angular-calendar';
import { CalendarService } from './calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  locale: string = 'es';

  viewDate: Date = new Date();
  colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  excludeDays: number[] = [0];
  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  events: CalendarEvent[] = [ ];

  activeDayIsOpen: boolean = true;
  constructor(private service: CalendarService) { }

  ngOnInit() {
   
    console.log(this.events);

    this.service.getSala1().subscribe(res => {
      this.events = res.map(({startTime: start, endTime: end, name: title}) => ({start: new Date(start), end: new Date(end), title}));
    });
  }

  

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    console.log(new Date());
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
