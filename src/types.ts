export type Champion = {
    name: string,
    img: string,
    role: Role
}

export const Role = {
    TOP: 'TOP',
    JUNGLE: 'JUNGLE',
    MID: 'MID',
    ADC: 'ADC',
    SUPPORT: 'SUPPORT'
} as const;

export type Role = keyof typeof Role;