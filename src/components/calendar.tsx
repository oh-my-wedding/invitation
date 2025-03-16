'use client';

import classNames from 'classnames';
import { differenceInDays } from 'date-fns';
import dynamic from 'next/dynamic';

const EventCountdown = dynamic(() => import('@/components/event-countdown'),
  { ssr: false }
);

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];
const DAYS = [
  ['', '', '', '', '1', '2', '3'],
  ['4', '5', '6', '7', '8', '9', '10'],
  ['11', '12', '13', '14', '15', '16', '17'],
  ['18', '19', '20', '21', '22', '23', '24'],
  ['25', '26', '27', '28', '29', '30', '31'],
];
const targetDate = new Date('2025-05-25T03:00:00.000Z');

export const Calendar = () => {
  return (
    <div>
      <div className="pt-4">
        <span className="text-[3.5em]">5</span>
      </div>
      <div className="m-8">
        <div className="flex">
          {WEEKS.map((day, index) => (
            <div
              key={index}
              className={
                classNames("flex-1 items-center text-xs h-8", { 'text-red-400': index === 0 })
              }
            >
              {day}
            </div>
          ))}
        </div>
        {DAYS.map((week, weekIndex) => (
          <div key={weekIndex} className="flex">
            {week.map((day, dayIndex) => (
              <div
                key={`${weekIndex}-${dayIndex}`}
                className={
                  classNames("flex-1 items-center text-xs h-8", { 'text-red-400': dayIndex === 0 })
                }
              >
                <span
                  className={
                    classNames('p-2 rounded-full', { 'bg-slate-300': day === '25', 'text-white': day === '25' })
                  }
                >
                  {day}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div>
        <EventCountdown value="2025-05-25T12:00:00+09:00" />
      </div>

      <div className="mt-8 text-xs tracking-[0.2em]">
        현규 ❤️ 희진의 예식이<span className="mx-1 text-[#8c9a6f]">{differenceInDays(targetDate, new Date())}일</span>남았습니다.
      </div>
    </div>
  );
};
