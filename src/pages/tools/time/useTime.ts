import { useState, useEffect, useCallback } from "react";
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'

/**
 * 
 * @param format format of the display time
 * @param interval interval to end time。`[30, 'm']` means the interval is 30 minutes.  
 * @returns { startTime, endTime } | { time }
 */
const useTime = (format: string, interval?: [number, 'd'|'w'|'M'|'Q'|'y'|'h'|'m'|'s'|'ms']) => {
  const [time, setTime] = useState(dayjs())

  const getTime = (time: Dayjs, interval?: any[]): string => {
    if (interval && interval.length) return dayjs(time).add(interval[0], interval[1]).format(format)
    return dayjs(time).format(format)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(dayjs())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [time])

  if (interval && interval.length) {
    return {
      startTime: getTime(time),
      endTime: getTime(time, interval)
    }
  }

  return {
    time: getTime(time),
  }
}

export default useTime;
