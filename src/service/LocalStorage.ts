export default function LocalStorage<T>() {
    return {
        set: (key: string, data: T) => window.localStorage.setItem(key, JSON.stringify(data)),
        get: (key: string): T => {
            const res = window.localStorage.getItem(key)
            return res ? JSON.parse(res) : JSON.parse(JSON.stringify(""))
        },
    }
}
