import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { type Object3D, type Object3DEventMap } from 'three';

import DreiKit from '~/DreiKit/src/DreiKit';
import Model from '~/DreiKit/src/components/Model';

type Props = {
    url: string;
    preprocessor: (_updateKey: (okey: string, nkey: string) => boolean) => void;
    postprocessor: () => void;
    grapher: [
        Object3D<Object3DEventMap>[],
        (o: Object3D<Object3DEventMap>[]) => void,
    ];
};

const Sx15 = ({
    url,
    preprocessor,
    postprocessor,
    grapher: [graph, setGraph],
}: Props) => {
    useEffect(() => {
        if (graph.length == 0) return;

        const s = DreiKit.buildDictionary(graph, preprocessor);
        DreiKit.setDictionary(s);

        postprocessor();
    }, [graph, postprocessor, preprocessor]);

    return (
        <>
            <Model
                url={url}
                grapher={[graph, setGraph]}
                preprocessor={preprocessor}
            />
        </>
    );
};

export default dynamic(() => Promise.resolve(Sx15), {
    ssr: false,
});
