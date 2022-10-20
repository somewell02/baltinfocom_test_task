interface VkSearchCallResult<T> {
    response: {
        count: number,
        items: Array<T>
    }
}

export default VkSearchCallResult