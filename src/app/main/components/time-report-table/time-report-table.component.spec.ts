import { TimeReportTableComponent } from './time-report-table.component';
import {createHostFactory, Spectator} from "@ngneat/spectator";
import {testId} from "@test/http-predicates";
import {CalendarDay, CalendarDayStatus, Worker} from "@api/models";
import {SharedModule} from "@app/shared/shared.module";

describe('TimeReportTableComponent', () => {
  let spectator: Spectator<TimeReportTableComponent>;
  const createComponent = createHostFactory({
    component: TimeReportTableComponent,
    imports: [SharedModule]
  });

  beforeAll(() => {
    const fakeNow = new Date(2020, 3); //2020-04-01
    jest.spyOn(Date, 'now').mockImplementation(() => fakeNow.getTime());
  });

  afterAll(() => {
    jest.spyOn(Date, "now").mockRestore()
  });

  const workerListSimple: Worker[] = [
    {
      id: 2,
      firstName: 'name',
      lastName: 'surname'
    },
    {
      id: 3,
      firstName: 'johny',
      lastName: 'wobba'
    }
  ];

  const initComponent = (hostProps?: {[key: string]: any}) => {
    return createComponent(`
      <nauka-time-report-table
        [workerList]="workerList"
        [month]="month"
        [calendarDays]="calendarDays"
        [defaultCalendarDayStatus]="defaultCalendarDayStatus"
      ></nauka-time-report-table>`,
      { hostProps }
    );
  }

  it('should create', () => {
    spectator = initComponent()
    expect(spectator.component).toBeTruthy();
  });

  it('should display given workers', () => {
    spectator = initComponent({ workerList: workerListSimple });
    expect(spectator.queryAll(testId('worker'))).toHaveLength(2);
  });

  it('should display worker full name', () => {
    spectator = initComponent({ workerList: workerListSimple });
    expect(spectator.queryLast(testId('worker-full-name'))?.textContent).toEqual('johny wobba');
  });

  it('should display columns based on input month number', () => {
    const getLastWorkerMonthColumns = () => {
      return spectator.queryLast(testId('worker'))?.querySelectorAll(testId('month-column'));
    }

    spectator = initComponent({ month: 4, workerList: workerListSimple });
    expect(spectator.queryAll(testId('month-header'))).toHaveLength(30);
    expect(getLastWorkerMonthColumns()).toHaveLength(30);

    spectator.setInput('month', 2);
    expect(spectator.queryAll(testId('month-header'))).toHaveLength(29);
    expect(getLastWorkerMonthColumns()).toHaveLength(29);


    spectator.setInput('month', 12);
    expect(spectator.queryAll(testId('month-header'))).toHaveLength(31);
    expect(getLastWorkerMonthColumns()).toHaveLength(31);
  });

  it('should display workday result in column', () => {
    const workerListWithWorkdays: Worker[] = [
      {
        ...workerListSimple[0],
        workdayResults: [
          {status: { shortTitle: 'W' }, date: '2020-05-01'},
          {status: { shortTitle: 'D' }, date: '2020-05-06'},
          {status: { shortTitle: 'H' }, date: '2020-05-08'},
        ]
      },
      {
        ...workerListSimple[1],
        workdayResults: [
          {status: { shortTitle: 'D' }, date: '2020-05-02'},
          {status: { shortTitle: 'H' }, date: '2020-05-11'}
        ]
      }
    ];

    spectator = initComponent({ month: 5, workerList: workerListWithWorkdays });
    const workerNodes = spectator.queryAll(testId('worker'));

    expect(workerNodes[0].querySelectorAll(testId('month-column'))[5].textContent).toContain('D');
    expect(workerNodes[1].querySelectorAll(testId('month-column'))[10].textContent).toContain('H');
  });

  it('should set background-color of column cells on calendarDays @Input', () => {
    const calendarDays: CalendarDay[] = [
      {date: '2020-05-01', status: { hexColor: '#aaaeee' }},
      {date: '2020-05-04', status: { hexColor: '#bbbaaa' }},
      {date: '2020-05-09', status: { hexColor: '#ddfeef' }},
    ];

    spectator = initComponent({ month: 5, calendarDays, workerList: workerListSimple });
    const workerNodes = spectator.queryAll(testId('worker'));

    // check head
    const headCells = spectator.queryAll<HTMLElement>(testId('month-header'));

    expect(rgb2hex(headCells[0].style.backgroundColor)).toEqual('#aaaeee');
    expect(rgb2hex(headCells[3].style.backgroundColor)).toEqual('#bbbaaa');
    expect(rgb2hex(headCells[8].style.backgroundColor)).toEqual('#ddfeef');

    // check body
    workerNodes.forEach(i => {
      const cells = i.querySelectorAll<HTMLElement>(testId('month-column'));
      expect(rgb2hex(cells[0].style.backgroundColor)).toEqual('#aaaeee');
      expect(rgb2hex(cells[3].style.backgroundColor)).toEqual('#bbbaaa');
      expect(rgb2hex(cells[8].style.backgroundColor)).toEqual('#ddfeef');
    });
  });

  it('should set background-color of all non-defined cells based on defaultCalendarDayStatus @Input', () => {
    const calendarDays: CalendarDay[] = [
      {date: '2020-05-01', status: { hexColor: '#aaaeee' }},
      {date: '2020-05-04', status: { hexColor: '#bbbaaa' }},
      {date: '2020-05-09', status: { hexColor: '#ddfeef' }},
    ];
    const defaultCalendarDayStatus: CalendarDayStatus = {
      default: true, hexColor: '#ffff00'
    };

    spectator = initComponent({
      month: 5, workerList: workerListSimple,
      calendarDays, defaultCalendarDayStatus
    });
    const workerNodes = spectator.queryAll(testId('worker'));

    // check head
    const headCells = spectator.queryAll<HTMLElement>(testId('month-header'));
    expect(rgb2hex(headCells[0].style.backgroundColor)).not.toEqual('#ffff00');
    expect(rgb2hex(headCells[3].style.backgroundColor)).not.toEqual('#ffff00');
    expect(rgb2hex(headCells[6].style.backgroundColor)).toEqual('#ffff00');
    expect(rgb2hex(headCells[14].style.backgroundColor)).toEqual('#ffff00');

    // check body
    workerNodes.forEach(i => {
      const cells = i.querySelectorAll<HTMLElement>(testId('month-column'));
      expect(rgb2hex(cells[0].style.backgroundColor)).not.toEqual('#ffff00');
      expect(rgb2hex(cells[3].style.backgroundColor)).not.toEqual('#ffff00');
      expect(rgb2hex(cells[6].style.backgroundColor)).toEqual('#ffff00');
      expect(rgb2hex(cells[14].style.backgroundColor)).toEqual('#ffff00');
    });
  });

  it('should write to summary column', () => {
    const workerListWithWorkdays: Worker[] = [
      {
        ...workerListSimple[0],
        workdayResults: [
          {status: { shortTitle: 'A' }, date: '2020-05-01'},
          {status: { shortTitle: 'A' }, date: '2020-05-02'},
          {status: { shortTitle: 'A' }, date: '2020-05-03'},
          {status: { shortTitle: 'D' }, date: '2020-05-05'},
          {status: { shortTitle: 'D' }, date: '2020-05-06'},
          {status: { shortTitle: 'H' }, date: '2020-05-08'},
        ]
      },
      {
        ...workerListSimple[1],
        workdayResults: [
          {status: { shortTitle: 'D' }, date: '2020-05-01'},
          {status: { shortTitle: 'D' }, date: '2020-05-02'},
          {status: { shortTitle: 'D' }, date: '2020-05-06'},
          {status: { shortTitle: 'A' }, date: '2020-05-08'}
        ]
      }
    ];

    spectator = initComponent({ month: 5, workerList: workerListWithWorkdays });
    const workerNodes = spectator.queryAll(testId('worker'));

    expect(workerNodes[0].querySelector(testId('summary-column'))?.textContent).toContain('A(3);D(2);H(1)');
    expect(workerNodes[1].querySelector(testId('summary-column'))?.textContent).toContain('D(3);A(1)');
  });
});

function rgb2hex(rgb: string): string {
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

  const rgbMatch = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!rgbMatch) return rgb;
  function hex(x: string) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgbMatch[1]) + hex(rgbMatch[2]) + hex(rgbMatch[3]);
}
