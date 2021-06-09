<template>
  <div
    class="flex-v flex-hc"
    style="height: 100vh"
  >
    <el-result
      icon="error"
      title="404"
      sub-title="该页面不存在"
    >
      <template #extra>
        <el-button
          type="primary"
          size="medium"
          @click="$router.go(-1)"
        >
          返回
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
