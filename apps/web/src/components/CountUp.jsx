import React, { useEffect, useRef, useState } from 'react';

const EASE_OUT_CUBIC = (progress) => 1 - Math.pow(1 - progress, 3);

const CountUp = ({ value, duration = 1600, decimals = 0, prefix = '', suffix = '', locale, className = '' }) => {
    const initialTarget = Number(value) || 0;
    const [display, setDisplay] = useState(initialTarget);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        const target = Number(value) || 0;

        if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setDisplay(target);
            return undefined;
        }

        let frame;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            observer.disconnect();

            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);

                setDisplay(target * EASE_OUT_CUBIC(progress));

                if (progress < 1) frame = requestAnimationFrame(tick);
            };

            frame = requestAnimationFrame(tick);
        }, { threshold: 0.3 });

        observer.observe(node);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value, duration]);

    const formattedTarget = initialTarget.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

    return (
        <span ref={ref} className={className} aria-label={`${prefix}${formattedTarget}${suffix}`}>
            {prefix}
            {display.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
            {suffix}
        </span>
    );
}

export default CountUp;

export { CountUp };
