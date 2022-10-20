interface VkUser {
    id: number
    screen_name: string
    first_name: string
    last_name: string,
    sex: string
    bdate: string
    counters: VkUserCounters
    photo_400_orig: string
}

interface VkUserCounters {
    friends: number
}

export default VkUser