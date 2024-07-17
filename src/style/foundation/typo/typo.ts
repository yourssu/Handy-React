import { FontWeight, TypoType } from './typo.type';

export type Typos = Record<TypoType, string>;

export const fontWeights: Record<FontWeight, number> = {
  Light: 300,
  Regular: 400,
  SemiBold: 600,
};

export const typos: Typos = {
  D1_Lt_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Light};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D1_Rg_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Regular};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D1_Sb_96: `
        font-size: 96px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D2_Lt_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Light};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D2_Rg_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Regular};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D2_Sb_88: `
        font-size: 88px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D3_Lt_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Light};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D3_Rg_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Regular};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D3_Sb_80: `
        font-size: 80px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D4_Lt_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Light};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D4_Rg_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Regular};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D4_Sb_72: `
        font-size: 72px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D5_Lt_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Light};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D5_Rg_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Regular};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D5_Sb_64: `
        font-size: 64px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D6_Lt_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Light};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D6_Rg_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Regular};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  D6_Sb_56: `
        font-size: 56px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H1_Lt_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Light};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H1_Rg_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Regular};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H1_Sb_48: `
        font-size: 48px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H2_Lt_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Light};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H2_Rg_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Regular};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H2_Sb_40: `
        font-size: 40px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H3_Lt_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Light};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H3_Rg_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Regular};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  H3_Sb_32: `
        font-size: 32px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T1_Lt_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Light};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T1_Rg_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Regular};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T1_Sb_28: `
        font-size: 28px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T2_Lt_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Light};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T2_Rg_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Regular};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T2_Sb_24: `
        font-size: 24px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T3_Lt_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Light};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T3_Rg_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Regular};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T3_Sb_20: `
        font-size: 20px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T4_Lt_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Light};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T4_Rg_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Regular};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  T4_Sb_18: `
        font-size: 18px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B1_Lt_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Light};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B1_Rg_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Regular};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B1_Sb_16: `
        font-size: 16px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B2_Lt_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Light};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B2_Rg_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Regular};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B2_Sb_15: `
        font-size: 15px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B3_Lt_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Light};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B3_Rg_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Regular};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  B3_Sb_14: `
        font-size: 14px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C1_Lt_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C1_Rg_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C1_Sb_13: `
        font-size: 13px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C2_Lt_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C2_Rg_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C2_Sb_12: `
        font-size: 12px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C3_Lt_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Light};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C3_Rg_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Regular};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  C3_Sb_11: `
        font-size: 11px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
};
