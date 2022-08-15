import { presetAttributify, presetIcons, presetUno} from "unocss"
import Unocss from "unocss/vite"

const colors = [
    "white",
    "black",
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
]

const safelist = [
    ...colors.map((color) => `bg-${color}-500`),
    ...colors.map((color) => `hover:bg-${color}-700`)
]

export default () => {
    Unocss({
        safelist,
        presets: [presetUno(), presetAttributify(), presetIcons()],
      });
}