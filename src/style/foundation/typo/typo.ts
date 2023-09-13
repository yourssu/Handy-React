import { FontWeight, Typo } from './typo.type';

export const fontWeights: Record<FontWeight, number> = {
    Regular: 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
};

export const typos: Record<Typo, string> = {
    display1: `
        font-size: 40px;
        font-weight: ${fontWeights.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    display2: `
        font-size: 32px;
        font-weight: ${fontWeights.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    title1: `
        font-size: 28px;
        font-weight: ${fontWeights.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    title2: `
        font-size: 24px;
        font-weight: ${fontWeights.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    title3: `
        font-size: 20px;
        font-weight: ${fontWeights.Bold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    subtitle1: `
        font-size: 20px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    subtitle2: `
        font-size: 16px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    subtitle3: `
        font-size: 14px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    body1: `
        font-size: 15px;
        font-weight: ${fontWeights.Regular};
        line-height: 1.6;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    body2: `
        font-size: 14px;
        font-weight: ${fontWeights.Regular};
        line-height: 1.6;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    button0: `
        font-size: 16px;
        font-weight: ${fontWeights.Medium};
        line-height: 1.4;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    button1: `
        font-size: 16px;
        font-weight: ${fontWeights.Medium};
        line-height: 1.4;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    button2: `
        font-size: 14px;
        font-weight: ${fontWeights.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    button3: `
        font-size: 14px;
        font-weight: ${fontWeights.Regular};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    button4: `
        font-size: 12px;
        font-weight: ${fontWeights.Medium};
        line-height: 1.4;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    caption0: `
        font-size: 12px;
        font-weight: ${fontWeights.Medium};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    caption1: `
        font-size: 12px;
        font-weight: ${fontWeights.Regular};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
    caption2: `
        font-size: 11px;
        font-weight: ${fontWeights.Regular};
        line-height: 1.3;
        letter-spacing: 0;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    `,
};
