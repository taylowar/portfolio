import { useSectionContext } from '../_context/section-context';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import type { LINKS } from './data';

type SectionId = (typeof LINKS)[number]['hash'];

export function useSectionInView(id: SectionId, threshold = 0.75) {
    const {setActive, lastClickTime} = useSectionContext();
    const {ref, inView} = useInView({
        threshold,
    });

    useEffect(() => {
        if (inView) {
            if (Date.now() - lastClickTime >  1000) {
                setActive(id);
            }
        }
    }, [inView, setActive, lastClickTime, id]);
    return { ref, inView };
}
