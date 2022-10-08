<template>
    <div class="icon stroke">
        <svg viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15 3.37939L8 10.6208L1 3.37939"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "ArrowIcon",
});
</script>

<style lang="scss" scoped>
.icon {
    @include flex-center;
    width: 16px;
    height: 16px;
}
.stroke svg * {
    stroke: var(--text-color);
}
</style>