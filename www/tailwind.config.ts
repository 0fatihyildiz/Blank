import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                base: {
                    white: '#ffffff',
                    black: '#000000',
                },
                primary: {
                    50: '#f6f6f8',
                    100: '#ededf1',
                    200: '#dcdae2',
                    300: '#cac8d4',
                    400: '#b2aebf',
                    500: '#7a7493',
                    600: '#4f4770',
                    700: '#3f395a',
                    800: '#342f4d',
                    900: '#2f2b43',
                },
                alpha: {
                    black: {
                        5: 'rgba(47, 43, 67, .05)',
                        10: 'rgba(47, 43, 67, .1)',
                        20: 'rgba(47, 43, 67, .2)',
                        30: 'rgba(47, 43, 67, .3)',
                        40: 'rgba(47, 43, 67, .4)',
                        50: 'rgba(47, 43, 67, .5)',
                        60: 'rgba(47, 43, 67, .6)',
                        70: 'rgba(47, 43, 67, .7)',
                        80: 'rgba(47, 43, 67, .8)',
                        90: 'rgba(47, 43, 67, .9)',
                    },
                    white: {
                        5: 'rgba(255, 255, 255, .05)',
                        10: 'rgba(255, 255, 255, .1)',
                        20: 'rgba(255, 255, 255, .2)',
                        30: 'rgba(255, 255, 255, .3)',
                        40: 'rgba(255, 255, 255, .4)',
                        50: 'rgba(255, 255, 255, .5)',
                        60: 'rgba(255, 255, 255, .6)',
                        70: 'rgba(255, 255, 255, .7)',
                        80: 'rgba(255, 255, 255, .8)',
                        90: 'rgba(255, 255, 255, .9)',
                    },
                },
                success: {
                    50: '#effdf6',
                    100: '#d9f9e6',
                    200: '#b8f1d2',
                    300: '#8ee4ba',
                    400: '#6ad09d',
                    500: '#53b483',
                    600: '#2f9461',
                    700: '#2f7657',
                    800: '#255e46',
                    900: '#1e4d3a',
                },
                warning: {
                    50: '#fefaf5',
                    100: '#fbf2cb',
                    200: '#fde57e',
                    300: '#ffd16a',
                    400: '#fbbc55',
                    500: '#e9a23b',
                    600: '#c8811a',
                    700: '#a35c00',
                    800: '#8b4400',
                    900: '#78310b',
                },
                destructive: {
                    50: '#fef2f2',
                    100: '#fde9e9',
                    200: '#fac7c7',
                    300: '#f7a1a1',
                    400: '#f37373',
                    500: '#f34141',
                    600: '#cd3636',
                    700: '#a32e2e',
                    800: '#7c2323',
                    900: '#601b1b',
                },
                info: {
                    50: '#f4f7fe',
                    100: '#e9effd',
                    200: '#c8d8fa',
                    300: '#92b1f5',
                    400: '#5c8af0',
                    500: '#2563eb',
                    600: '#1f54c8',
                    700: '#1943a0',
                    800: '#10327e',
                    900: '#0b265f',
                },
            },
        },
    },
}