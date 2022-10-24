<template>
    <div v-if="visible" class="modal-wrap">
        <div class="modal__bg"></div>
        <div class="modal__content-wrap" @click="close">
            <div
                class="modal__content"
                @click.stop>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onBeforeUnmount, onMounted, ref} from "vue";

export default defineComponent({
    name: "ModalWrap",
    setup() {
        const visible = ref(false);
        const open = () => visible.value = true;
        const close = () => visible.value = false;

        const handleKeydown = (event: KeyboardEvent): void => {
            if (event.key === "Escape" && visible.value) {
                visible.value = false;
            }
        }

        onMounted(() => {
            document.addEventListener("keydown", handleKeydown);
        })

        onBeforeUnmount(()=> {
            document.removeEventListener("keydown", handleKeydown);
        })

        return {
            visible,
            open,
            close,
        }
    },
})
</script>

<style lang="scss" scoped>
.modal-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    .modal__bg {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        transition: opacity 0.5s;
    }

    .modal__content-wrap {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
        overflow-y: auto;
        display: flex;
        align-items: center;
        justify-content: center;

        .modal__content {
            background: white;
            padding: 40px;
            border-radius: 8px;
            min-width: 30%;
            overflow: hidden;
            transition: all 0.5s;
        }
    }
}
</style>