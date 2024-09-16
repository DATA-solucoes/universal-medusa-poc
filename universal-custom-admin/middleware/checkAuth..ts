export default defineNuxtRouteMiddleware((to, from) => {
    const app = useNuxtApp()
    console.log(app)

    const { user } = useUserStore()
    if (!user) {
        console.log('User not Authorized')
    }

    
})