'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { type Object3D, type Object3DEventMap } from 'three';
import { Canvas } from '@react-three/fiber';
import {
    CubeCamera,
    Environment,
    OrbitControls,
    PerspectiveCamera,
    Stage,
} from '@react-three/drei';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import ModelView from './model-view';
import {
    ChairAssemblyConsole,
    PARSERS,
    type ConfigurationModel,
    CHAIR_DEFAULT,
    P_CHAIR_CUSHION_TOP,
    P_CHAIR_CUSHION_BOTTOM,
    P_CHAIR_TYPE,
    type ChairType,
    type ChairCushionTop,
    type ChairCushionBottom,
} from './Chair.mac';

import { cn } from '~/lib/util';
import Loading from '~/components/ui/Loading';
import { type LexiconDevil } from '~/DreiKit/src/URLQueryParser';
import { type Locale } from '~/server/i18n.config';

const ModelViewer = ({
    postprocessor,
    grapher,
}: {
    postprocessor: () => void;
    grapher: [
        Object3D<Object3DEventMap>[],
        (o: Object3D<Object3DEventMap>[]) => void,
    ];
}) => {
    grapher;

    const preprocessor = (
        _updateKey: (okey: string, nkey: string) => boolean,
    ) => {
        // TODO: fix 3d model
        // updateKey('mighty.rack', 'mighty.rack.legExtension');
    };

    return (
        <>
            <OrbitControls
                target={[0, 2.0, 0]}
                rotateSpeed={2.25}
                dampingFactor={0.9}
            />
            <PerspectiveCamera
                makeDefault
                fov={30}
                zoom={0.5}
                position={[4, 2, 8]}
            />
            <CubeCamera resolution={128} frames={60}>
                {(_texture) => (
                    <>
                        <Environment preset="city" />
                        {
                            <Stage
                                intensity={0.2}
                                shadows="contact"
                                environment="city"
                            >
                                <mesh position={[0, 0.75, 0]}>
                                    <ModelView
                                        url={`/models/chair/scene-cmp.glb`}
                                        preprocessor={preprocessor}
                                        postprocessor={postprocessor}
                                        grapher={grapher}
                                    />
                                </mesh>
                            </Stage>
                        }
                    </>
                )}
            </CubeCamera>
        </>
    );
};
const colors: ChairType[] = ['oak', 'chalk', 'wallnut'];
const tushin: ChairCushionTop[] = ['none', 'blue', 'anarcho-green'];
const bushin: ChairCushionBottom[] = [
    'none',
    'blue',
    'anarcho-green',
    'leather-1',
    'leather-2',
    'leather-3',
];

export default function Page({
    params: { lang },
}: {
    params: { lang: Locale };
}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const [graph, setGraph] = useState<Object3D<Object3DEventMap>[]>([]);
    const [laoded, setLoaded] = useState(false);

    const LD: LexiconDevil<keyof ConfigurationModel> = new Map();
    const mutSearchParams = new URLSearchParams(
        Array.from(searchParams.entries()),
    );
    const RP = { router, pathname, mutSearchParams, lang };

    const [cushTop, setCushTop] = useState(
        P_CHAIR_CUSHION_TOP.parse(LD.get('cushTop')?.value),
    );

    const [cushBottom, setCushBottom] = useState(
        P_CHAIR_CUSHION_BOTTOM.parse(LD.get('cushBottom')?.value),
    );

    const [woodType, setWoodType] = useState(
        P_CHAIR_TYPE.parse(LD.get('chairType')?.value),
    );

    const postprocessor = () => {
        setLoaded(true);
        ChairAssemblyConsole.urlQueryParser.consume(
            PARSERS,
            CHAIR_DEFAULT,
            searchParams,
            LD,
        );
        ChairAssemblyConsole.render(RP, LD);
    };

    return (
        <motion.section
            id="contact"
            className="
                m-auto
                mb-20
                w-[min(100%,60rem)]
                scroll-mt-28
                p-16
                text-center
                sm:mb-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.5,
            }}
            viewport={{
                once: true,
            }}
        >
            <main
                className="
                relative
                grid 
                min-h-[30rem]
                overflow-hidden"
            >
                {!laoded && (
                    <span className="absolute place-self-center">
                        <Loading />
                    </span>
                )}
                <Canvas
                    shadows
                    className={cn(laoded && 'bg-white', 'cursor-grab')}
                >
                    <ModelViewer
                        postprocessor={postprocessor}
                        grapher={[graph, setGraph]}
                    />
                </Canvas>
                <div className="gap-2">
                    {laoded && (
                        <div className="right-48 flex flex-col place-content-center gap-2 p-4 sm:flex-row sm:gap-12">
                            <div className="flex flex-col gap-1 text-left">
                                <h2 className="uppercase text-green-400">
                                    Wood Type
                                </h2>
                                <ul>
                                    {colors.map((color) => (
                                        <li key={color}>
                                            <button
                                                className={cn(
                                                    woodType === color &&
                                                        'underline',
                                                )}
                                                type="button"
                                                onClick={() => {
                                                    ChairAssemblyConsole.urlQueryParser.mutate(
                                                        RP,
                                                        'chairType',
                                                        color,
                                                    );
                                                    setWoodType(color);
                                                }}
                                            >
                                                {color}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <br />
                            <div className="flex flex-col text-left">
                                <h2 className="uppercase text-green-400">
                                    Cushion Bottom
                                </h2>
                                <ul>
                                    {bushin.map((bc) => (
                                        <li key={`bottom-${bc}`}>
                                            <button
                                                className={cn(
                                                    cushBottom == bc &&
                                                        'underline',
                                                )}
                                                onClick={() => {
                                                    ChairAssemblyConsole.urlQueryParser.mutate(
                                                        RP,
                                                        'cushBottom',
                                                        bc,
                                                    );
                                                    setCushBottom(bc);
                                                }}
                                            >
                                                {bc}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <br />
                            <div className="flex flex-col text-left">
                                <h2 className="uppercase text-green-400">
                                    Cushion Top
                                </h2>
                                <ul>
                                    {tushin.map((bc) => (
                                        <li key={`top-${bc}`}>
                                            <button
                                                className={cn(
                                                    cushTop == bc &&
                                                        'underline',
                                                )}
                                                onClick={() => {
                                                    ChairAssemblyConsole.urlQueryParser.mutate(
                                                        RP,
                                                        'cushTop',
                                                        bc,
                                                    );
                                                    setCushTop(bc);
                                                }}
                                            >
                                                {bc}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </motion.section>
    );
}
