import { DependencyList, useEffect } from 'react'

export default function useTimeout(
    callback: Function,
    interval: Time,
    deps?: DependencyList
): void {
    useEffect(() => {
        const identifier = setTimeout(callback, interval.valueOf() * 1000)
        return () => clearTimeout(identifier)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [interval, ...(deps || [])])
}