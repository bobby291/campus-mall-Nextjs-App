// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js, ts, jsx, tsx}',
    ],
    theme: {
        extend : {
            colors: {
                primary: '#3B82F6',
                genz: {
                    light: '#8EC5FC',
                    meduim: '#3B82F6',
                    dark: '#1E3A8A',
                },
            },
        },
    },
    plugins: [],
}

export default config