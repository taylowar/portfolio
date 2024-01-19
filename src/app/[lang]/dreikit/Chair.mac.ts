//eslint-disable-next-line
import toast from 'react-hot-toast';

import { z } from 'zod';

import { type Locale } from '~/server/i18n.config';
import { type ModelAssemblyConsole } from '~/DreiKit/src/ModelAssemblyConsole';
import URL_QUERY_PARSER, {
    type AssemblyRecord,
    type Parser,
} from '~/DreiKit/src/URLQueryParser';
import DreiKit from '~/DreiKit/src/DreiKit';

export type ChairModel = 'chair';
export type ChairType = 'oak' | 'chalk' | 'wallnut';
export type ChairCushionBottom =
    | 'none'
    | 'blue'
    | 'anarcho-green'
    | 'leather-1'
    | 'leather-2'
    | 'leather-3';
export type ChairCushionTop = 'none' | 'blue' | 'anarcho-green';

export type ConfigurationModel = Record<'model', ChairModel> &
    Record<'chairType', ChairType> &
    Record<'cushTop', ChairCushionTop> &
    Record<'cushBottom', ChairCushionBottom>;

export const CHAIR_DEFAULT: ConfigurationModel = {
    model: 'chair',
    chairType: 'oak',
    cushTop: 'none',
    cushBottom: 'none',
};

export const P_MODEL = z.custom<ChairModel>();
export const P_CHAIR_TYPE = z.custom<ChairType>();
export const P_CHAIR_CUSHION_BOTTOM = z.custom<ChairCushionBottom>();
export const P_CHAIR_CUSHION_TOP = z.custom<ChairCushionTop>();

export const CHAIR_PARSER: AssemblyRecord<ConfigurationModel> = {
    model: P_MODEL,
    chairType: P_CHAIR_TYPE,
    cushTop: P_CHAIR_CUSHION_TOP,
    cushBottom: P_CHAIR_CUSHION_BOTTOM,
} as const;

export const PARSERS: Parser<ChairModel, ConfigurationModel> = {
    chair: CHAIR_PARSER,
};

function chiarCushionRender(
    cushBottom: ChairCushionBottom,
    cushTop: ChairCushionTop,
) {
    if (cushBottom !== 'none') {
        DreiKit.Renderer.show([`cushion-bottom-${cushBottom}`]);
    }
    if (cushTop !== 'none') {
        DreiKit.Renderer.show([`cusshion-top-${cushTop}`]);
    }
}

// -----------------------------------------------------------------------------
// Visualize configurations on the model
// -----------------------------------------------------------------------------
export const ChairAssemblyConsole: ModelAssemblyConsole<
    ConfigurationModel,
    Locale
> = {
    urlQueryParser: URL_QUERY_PARSER,
    render(_RP, LD) {
        const chairType = LD.get('chairType')?.value;
        DreiKit.Renderer.show([
            `legs-${chairType}`,
            `back-sitting-pane-${chairType}`,
            `sitting-pane-${chairType}`,
            `bar-front-${chairType}`,
            `bar-back-${chairType}`,
        ]);

        const cushBottom = P_CHAIR_CUSHION_BOTTOM.parse(
            LD.get('cushBottom')?.value,
        );

        const cushTop = P_CHAIR_CUSHION_TOP.parse(LD.get('cushTop')?.value);
        chiarCushionRender(cushBottom, cushTop);
    },
};
