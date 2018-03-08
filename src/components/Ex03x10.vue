<template>
  <div>
    하위 컴포넌트 영역입니다.
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
import EventBus from './event-bus'
export default {

  methods: {
    showLog: function () {
      EventBus.$emit('triggerEventBus', 200)
    }
  }
}
</script>
