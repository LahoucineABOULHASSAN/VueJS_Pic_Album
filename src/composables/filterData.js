import { computed } from 'vue'

const filterData = (props, emit) => {
  return computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value),
  })
}
export default filterData
