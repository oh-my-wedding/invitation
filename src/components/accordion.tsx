'use client';

import classNames from "classnames";
import { useState } from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div id="accordion-collapse" className="px-4 pb-4" data-accordion="collapse">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={classNames("flex items-center justify-between w-full p-4 font-normal bg-white shadow", {
            'rounded-xl': !open,
            'rounded-t-xl': open,
            'border-b-[1px]': open,
            'border-gray-200': open,
          })}
          data-accordion-target="#accordion-collapse-body-1"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-1"
          onClick={() => setOpen(prev => !prev)}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className={classNames("w-3 h-3 shrink-0", {
              'rotate-180': !open,
            })}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-1"
        className={classNames('rounded-b-xl overflow-hidden shadow', {
          hidden: !open,
        })}
      >
        <div className="px-6 py-2 text-left font-light bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};
