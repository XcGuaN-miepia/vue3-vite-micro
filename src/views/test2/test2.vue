<template>
  <div>
    test122222
    {{ count }}
    <el-button @click="add">
      +1
    </el-button>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
  setup() {
    let count = ref(0)

    const add = () => {
      count.value++
    }

    return {
      count,
      add
    }
  }
}
</script>

<style>

</style>
