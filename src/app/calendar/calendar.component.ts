import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CalendarEvent, DAYS_OF_WEEK } from 'angular-calendar';
import { CalendarService } from './calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  view: string = 'week';

  news: any[];

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

  events: CalendarEvent[] = [
    {
      start: new Date('2019-04-12T08:00:00-05:00'),
      end: new Date('2019-04-12T12:00:00-05:00'),
      title: 'Estructuras de la información',
      color: this.colors.red
    }
  ];

  constructor(private service: CalendarService) { }

  ngOnInit() {
    this.service.getSala1().subscribe(res => {
      this.news = res;
      console.log(this.news);
    });
  }

  eventClicked({ event }: { event: CalendarEvent }): void {
    console.log('Event clicked', event);
    console.log(new Date());
  }

}
