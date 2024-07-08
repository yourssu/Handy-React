import { FontWeight, TypoENType, TypoKRType } from './typo.type';

interface Typos {
  en: Record<TypoENType, string>;
  kr: Record<TypoKRType, string>;
}

export const fontWeights: Record<FontWeight, number> = {
  Light: 300,
  Regular: 400,
  SemiBold: 600,
};

export const typos: Typos = {
  en: {
    D1_EN_Sb_96: `
        font-size: 96px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 120px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D1_EN_Rg_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Regular};
        line-height: 120px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D1_EN_Lt_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Light};
        line-height: 120px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_EN_Sb_88: `
        font-size: 88px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 114px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_EN_Rg_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Regular};
        line-height: 114px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_EN_Lt_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Light};
        line-height: 114px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_EN_Sb_80: `
        font-size: 80px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 100px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_EN_Rg_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Regular};
        line-height: 100px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_EN_Lt_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Light};
        line-height: 100px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_EN_Sb_72: `
        font-size: 72px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 90px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_EN_Rg_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Regular};
        line-height: 90px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_EN_Lt_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Light};
        line-height: 90px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_EN_Sb_64: `
        font-size: 64px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 80px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_EN_Rg_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Regular};
        line-height: 80px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_EN_Lt_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Light};
        line-height: 80px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_EN_Sb_56: `
        font-size: 56px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 72px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_EN_Rg_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Regular};
        line-height: 72px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_EN_Lt_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Light};
        line-height: 72px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_EN_Lt_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Light};
        line-height: 62px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_EN_Rg_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Regular};
        line-height: 62px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_EN_Sb_48: `
        font-size: 48px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 62px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_EN_Lt_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Light};
        line-height: 52px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_EN_Rg_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Regular};
        line-height: 52px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_EN_Sb_40: `
        font-size: 40px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 52px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_EN_Lt_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Light};
        line-height: 42px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_EN_Rg_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Regular};
        line-height: 42px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_EN_Sb_32: `
        font-size: 32px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 42px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_EN_Lt_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Light};
        line-height: 38px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_EN_Rg_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Regular};
        line-height: 38px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_EN_Sb_28: `
        font-size: 28px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 38px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_EN_Lt_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Light};
        line-height: 34px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_EN_Rg_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Regular};
        line-height: 34px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_EN_Sb_24: `
        font-size: 24px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 34px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_EN_Lt_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Light};
        line-height: 28px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_EN_Rg_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Regular};
        line-height: 28px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_EN_Sb_20: `
        font-size: 20px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 28px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_EN_Lt_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Light};
        line-height: 26px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_EN_Rg_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Regular};
        line-height: 26px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_EN_Sb_18: `
        font-size: 18px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 26px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_EN_Lt_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Light};
        line-height: 24px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_EN_Rg_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Regular};
        line-height: 24px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_EN_Sb_16: `
        font-size: 16px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 24px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_EN_Lt_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Light};
        line-height: 22px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_EN_Rg_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Regular};
        line-height: 22px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_EN_Sb_15: `
        font-size: 15px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 22px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_EN_Lt_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Light};
        line-height: 20px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_EN_Rg_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Regular};
        line-height: T3_KR_Sb_20px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_EN_Sb_14: `
        font-size: 14px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 20px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_EN_Lt_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_EN_Rg_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_EN_Sb_13: `
        font-size: 13px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_EN_Lt_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_EN_Rg_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_EN_Sb_12: `
        font-size: 12px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_EN_Lt_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Light};
        line-height: 16px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_EN_Rg_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Regular};
        line-height: 16px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_EN_Sb_11: `
        font-size: 11px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 16px;
        letter-spacing: 0;
        font-family: 'Pretendard', 'sans-serif';
    `,
  },
  kr: {
    D1_KR_Lt_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Light};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D1_KR_Rg_96: `
        font-size: 96px;
        font-weight: ${fontWeights.Regular};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D1_KR_Sb_96: `
        font-size: 96px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 120px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_KR_Lt_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Light};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_KR_Rg_88: `
        font-size: 88px;
        font-weight: ${fontWeights.Regular};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D2_KR_Sb_88: `
        font-size: 88px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 114px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_KR_Lt_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Light};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_KR_Rg_80: `
        font-size: 80px;
        font-weight: ${fontWeights.Regular};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D3_KR_Sb_80: `
        font-size: 80px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 100px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_KR_Lt_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Light};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_KR_Rg_72: `
        font-size: 72px;
        font-weight: ${fontWeights.Regular};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D4_KR_Sb_72: `
        font-size: 72px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 90px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_KR_Lt_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Light};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_KR_Rg_64: `
        font-size: 64px;
        font-weight: ${fontWeights.Regular};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D5_KR_Sb_64: `
        font-size: 64px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 80px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_KR_Lt_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Light};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_KR_Rg_56: `
        font-size: 56px;
        font-weight: ${fontWeights.Regular};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    D6_KR_Sb_56: `
        font-size: 56px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 72px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_KR_Lt_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Light};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_KR_Rg_48: `
        font-size: 48px;
        font-weight: ${fontWeights.Regular};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H1_KR_Sb_48: `
        font-size: 48px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 62px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_KR_Lt_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Light};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_KR_Rg_40: `
        font-size: 40px;
        font-weight: ${fontWeights.Regular};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H2_KR_Sb_40: `
        font-size: 40px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 52px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_KR_Lt_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Light};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_KR_Rg_32: `
        font-size: 32px;
        font-weight: ${fontWeights.Regular};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    H3_KR_Sb_32: `
        font-size: 32px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 42px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_KR_Lt_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Light};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_KR_Rg_28: `
        font-size: 28px;
        font-weight: ${fontWeights.Regular};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T1_KR_Sb_28: `
        font-size: 28px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 38px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_KR_Lt_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Light};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_KR_Rg_24: `
        font-size: 24px;
        font-weight: ${fontWeights.Regular};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T2_KR_Sb_24: `
        font-size: 24px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 34px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_KR_Lt_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Light};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_KR_Rg_20: `
        font-size: 20px;
        font-weight: ${fontWeights.Regular};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T3_KR_Sb_20: `
        font-size: 20px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 28px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_KR_Lt_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Light};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_KR_Rg_18: `
        font-size: 18px;
        font-weight: ${fontWeights.Regular};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    T4_KR_Sb_18: `
        font-size: 18px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 26px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_KR_Lt_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Light};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_KR_Rg_16: `
        font-size: 16px;
        font-weight: ${fontWeights.Regular};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B1_KR_Sb_16: `
        font-size: 16px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 24px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_KR_Lt_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Light};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_KR_Rg_15: `
        font-size: 15px;
        font-weight: ${fontWeights.Regular};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B2_KR_Sb_15: `
        font-size: 15px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 22px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_KR_Lt_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Light};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_KR_Rg_14: `
        font-size: 14px;
        font-weight: ${fontWeights.Regular};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    B3_KR_Sb_14: `
        font-size: 14px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 20px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_KR_Lt_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_KR_Rg_13: `
        font-size: 13px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C1_KR_Sb_13: `
        font-size: 13px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_KR_Lt_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Light};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_KR_Rg_12: `
        font-size: 12px;
        font-weight: ${fontWeights.Regular};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C2_KR_Sb_12: `
        font-size: 12px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 18px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_KR_Lt_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Light};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_KR_Rg_11: `
        font-size: 11px;
        font-weight: ${fontWeights.Regular};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
    C3_KR_Sb_11: `
        font-size: 11px;
        font-weight: ${fontWeights.SemiBold};
        line-height: 16px;
        letter-spacing: -0.02em;
        font-family: 'Pretendard', 'sans-serif';
    `,
  },
};
