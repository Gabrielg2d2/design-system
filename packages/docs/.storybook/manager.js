import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
    theme: create({
        base: 'dark',
        brandImage: 'https://avatars.githubusercontent.com/u/101529710?v=4',
    }),
})