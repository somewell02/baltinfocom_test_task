<template>
    <input/>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "BorderedInput",
});
</script>

<style lang="scss" scoped>
input {
    width: 100%;
    padding: 0 20px;
    height: 45px;
    background: transparent;
    outline: none;
    font-size: 14px;
    color: var(--text-color);
    border: 1px solid var(--input-color);
    border-radius: 8px;

    &:focus {
        border: 2px solid var(--input-color);
        padding: 0 19px;
    }

    &::placeholder {
        color: var(--secondary-color);
    }
}
</style>