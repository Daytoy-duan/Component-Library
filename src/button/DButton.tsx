import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";

export type DColor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'

export const props = {
  color: {
    type: String as PropType<DColor>,
    default: 'green'
  }
}
export default defineComponent({
  name: "DButton",
  props,
  setup(props,{slots}){
    return ()=> <button
    class={`
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props.color}-500 
      hover:bg-blue-700 
      border-none 
      cursor-pointer 
      m -1 
      `}
    >{slots.default ? slots.default : 'DButton'}</button>
  }
});