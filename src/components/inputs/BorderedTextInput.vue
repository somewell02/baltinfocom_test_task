<template>
    <bordered-input type="text" :value="modelValue ?? ''" @input="updateInput"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import BorderedInput from "./BorderedInput.vue";

export default defineComponent({
    name: "BorderedTextInput",
    components: {
        BorderedInput
    },
    props: {
        modelValue: {
            type: String,
            required: true,
        },
    },
    emits: {
        "update:modelValue": null,
    },
    setup(_, {emit}) {
        const updateInput = (event: Event): void => {
            emit("update:modelValue", (event.target as HTMLInputElement).value);
        }

        return {
            updateInput
        }
    },
});
</script>