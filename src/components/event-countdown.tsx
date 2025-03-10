'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

interface FlipProps {
  value: string;
}

export const EventCountdown = ({ value }: FlipProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const tickRef = useRef<any>(null);

  const [tickValue, setTickValue] = useState(value);

  useEffect(() => {
    const didInit = (tick: any) => {
      tickRef.current = tick;
    };

    const currDiv = divRef.current;
    const tickValue = tickRef.current;
    Tick.DOM.create(currDiv, {
      value,
      didInit,
      credits: false,
    });
    return () => Tick.DOM.destroy(tickValue);
  }, [value]);

  useEffect(() => {
    const counter = Tick.count.down(value, {
      format: ["d", "h", "m", "s"]
    });

    counter.onupdate = function (value: any) {
      setTickValue(value);
    };

    return () => {
      counter.timer.stop();
    };
  }, [value]);

  useEffect(() => {
    if (tickRef.current) {
      tickRef.current.value = {
        days: tickValue[0],
        hours: tickValue[1],
        mins: tickValue[2],
        secs: tickValue[3]
      };
    }
  }, [tickValue]);

  return (
    <div ref={divRef} className="flex items-end justify-center">
      <div className="m-1">
        <div className="text-[10px]">DAY</div>
        <div
          className="mt-2 text-xl"
          data-key="days"
          data-repeat="true"
          data-transform="pad(00) -> split -> delay"
        >
          <span data-view="flip"></span>
        </div>
      </div>
      <div>:</div>
      <div className="m-1">
        <div className="text-[10px]">HOUR</div>
        <div
          className="mt-2 text-xl"
          data-key="hours"
          data-repeat="true"
          data-transform="pad(00) -> split -> delay"
        >
          <span data-view="flip"></span>
        </div>
      </div>
      <div>:</div>
      <div className="m-1">
        <div className="text-[10px]">MIN</div>
        <div
          className="mt-2 text-xl"
          data-key="mins"
          data-repeat="true"
          data-transform="pad(00) -> split -> delay"
        >
          <span data-view="flip"></span>
        </div>
      </div>
      <div>:</div>
      <div className="m-1">
        <div className="text-[10px]">SEC</div>
        <div
          className="mt-2 text-xl"
          data-key="secs"
          data-repeat="true"
          data-transform="pad(00) -> split -> delay"
        >
          <span data-view="flip"></span>
        </div>
      </div>
    </div>
  );
};
