<template>
    <div class="vertical_list">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "VerticalList"
})
</script>

<style lang="scss" scoped>
.vertical_list {
    display: flex;
    flex-direction: column;
}
</style>