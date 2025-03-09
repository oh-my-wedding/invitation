import classNames from 'classnames';

const WEEKS = ['일', '월', '화', '수', '목', '금', '토'];
const DAYS = [
  ['', '', '', '', '1', '2', '3'],
  ['4', '5', '6', '7', '8', '9', '10'],
  ['11', '12', '13', '14', '15', '16', '17'],
  ['18', '19', '20', '21', '22', '23', '24'],
  ['25', '26', '27', '28', '29', '30', '31'],
];

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
    </div>
  );
};

