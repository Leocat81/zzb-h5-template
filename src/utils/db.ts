const get = (key: string): string | null => {
    return window.localStorage.getItem(key)
}

const set = (key: string, value: string): void => {
    window.localStorage.setItem(key, value)
}

export default {
    get,
    set,
}
