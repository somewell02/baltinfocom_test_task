<template>
    <button>
        <slot/>
    </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "BorderedButton",
});
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    padding: 10px 20px;
    height: 40px;
    font-size: 14px;
    margin: 0;
    min-width: 120px;
    color: var(--text-color);
    border: 1px solid var(--border-color);
    background: none;

    &:hover {
        background: var(--border-color);
    }
}
</style>