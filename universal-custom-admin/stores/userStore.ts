export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        setUserStore(user) {
            this.user = user
        }
    }
})