<template>
    <div class="vk-user-card">
        <div class="user__photo">
            <img :src="user.photo_400_orig" :alt="`${user.screen_name}-photo`">
        </div>
        <div class="user__content">
            <div class="user__info">
                <div class="user__info__item user__name">{{ user.first_name }} {{ user.last_name }}</div>
                <div class="user__info__item user__gender__age">{{ user.sex }}, {{ user.bdate + " " + calculateAge }}</div>
                <div class="user__info__item user__friends-count" v-if="type === 'default'">Количество друзей: {{ user.counters.friends }}</div>
            </div>
            <div class="user__actions">
                <template v-if="type === 'default'">

                </template>
                <template v-else-if="type === 'search'">
                    <filled-button>Добавить</filled-button>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import FilledButton from "@/components/buttons/FilledButton.vue";

import {computed, defineComponent, PropType, toRefs} from "vue";
import VkUser from "@/types/vk/VkUser";
import DateTimeManager from "@/services/DateTimeManager";

export default defineComponent({
    name: "VkUserCard",
    components: {
        FilledButton
    },
    props: {
        user: {
            type: Object as PropType<VkUser>,
            required: true,
        },
        type: {
            type: String,
            required: false,
            default: "default"
        }
    },
    setup(props) {
        const { user } = toRefs(props);

        const calculateAge = computed(() => {
            if (user.value.bdate && user.value.bdate.split(".").length === 3) {
                return DateTimeManager.calculateAge(user.value.bdate)
            } else {
                return "возраст неопределен"
            }
        })

        return {
            calculateAge
        }
    }
})
</script>

<style lang="scss" scoped>
.vk-user-card {
    display: flex;

    .user__photo {
        width: 100px;
        height: 100px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }
    }

    .user__content {
        flex-grow: 3;
        padding-left: 15px;

        .user__info {
            .user__info__item {
                font-size: 14px;

                &:not(:last-child) {
                    margin-bottom: 5px;
                }

                &.user__name {
                    font-size: 16px;
                    font-weight: 600;
                }

                &.user__gender__age {

                }
            }
        }
    }
}
</style>