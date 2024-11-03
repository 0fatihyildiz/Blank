import { type IconSetOptions, optionsSvgToJson } from '@/tools/svgToJson'

const options: IconSetOptions[] = [
    {
        sourceDir: './assets/payment',
        targetFile: './json/payment.json',
        prefix: 'payment',
        iconSetInfo: {
            name: 'Payment',
            author: {
                name: 'Craftwork',
                url: 'https://craftwork.design',
            },
            license: {
                title: 'MIT License',
                url: 'https://opensource.org/licenses/MIT',
            },
            samples: ['payment:googlepay', 'payment:qiwi', 'payment:visa'],
        },
    },
    {
        sourceDir: './assets/cryptocurrency',
        targetFile: './json/cryptocurrency.json',
        prefix: 'cryptocurrency',
        iconSetInfo: {
            name: 'Cryptocurrency',
            author: {
                name: 'Craftwork',
                url: 'https://craftwork.design',
            },
            license: {
                title: 'MIT License',
                url: 'https://opensource.org/licenses/MIT',
            },
            samples: ['cryptocurrency:bitcoin', 'cryptocurrency:binance', 'cryptocurrency:xrp'],
        },
    },
]

optionsSvgToJson(options)
