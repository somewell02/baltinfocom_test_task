<template>
    <div class="vk-user-card">
        <div class="user__photo">
            <img :src="user.photo_400_orig" :alt="`${user.screen_name}-photo`">
        </div>
        <div class="user__content">
            <div class="user__info">
                <div class="user__info__item user__name">{{ user.first_name }} {{ user.last_name }}</div>
                <div class="user__info__item user__gender">Пол: {{ getGender }}</div>
                <div class="user__info__item user__age">Возраст: {{ calculateAge }}</div>
                <div class="user__info__item user__friends-count" v-if="type === 'default'">Количество друзей: {{ user.counters.friends }}</div>
            </div>
            <div class="user__actions">
                <template v-if="type === 'default'">

                </template>
                <template v-else-if="type === 'search'">
                    <filled-button class="user__actions__btn">Добавить</filled-button>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import FilledButton from "@/components/buttons/FilledButton.vue";

import {computed, defineComponent, PropType, toRefs} from "vue";
import VkUser from "@/types/vk/VkUser";
import DateTimeManager from "@/services/managers/DateTimeManager";
import VkUserGender from "@/types/vk/VkUserGender";

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

        const getGender = computed((): string => {
            if (user.value.sex) {
                switch (user.value.sex) {
                    case 1: return VkUserGender.Female.toLowerCase();
                    case 2: return VkUserGender.Male.toLowerCase();
                    default: return VkUserGender.NotSpecified.toLowerCase();
                }
            } else {
                return VkUserGender.NotSpecified.toLowerCase();
            }
        })

        const calculateAge = computed((): string => {
            if (user.value.bdate && user.value.bdate.split(".").length === 3) {
                const age: number = DateTimeManager.calculateAge(user.value.bdate);
                const postfix: string = age % 10 === 1
                    ? (age % 100 > 10 && age % 100 < 20) ? "лет" : "год"
                    : [2, 3, 4].includes(age % 10)
                        ? (age % 100 > 10 && age % 100 < 20) ? "лет" : "года"
                        : "лет";
                return `${age} ${postfix}`;
            } else {
                return "неопределен";
            }
        })

        return {
            getGender,
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;

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
            }
        }
        .user__actions {
            display: flex;

            .user__actions__btn {
                padding: 5px 10px;
                height: 25px;
                font-size: 12px;
            }
        }
    }
}
</style>