<template>
    <button>
        <slot/>
    </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "FilledButton",
});
</script>

<style lang="scss" scoped>
button {
    cursor: pointer;
    padding: 10px 20px;
    height: 40px;
    font-size: 14px;
    border: 0;
    border-radius: 8px;
    margin: 0;
    min-width: 120px;
    color: var(--primary-text-color);
    background: var(--primary-color);

    &:hover {
        background: none;
        outline: 1px solid var(--primary-color);
        color: var(--primary-color);
    }
}
</style>