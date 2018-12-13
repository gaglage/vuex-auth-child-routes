export function setUser(state, user) {
    state.user = user
    state.isLogged = true
    state.error = false
    state.errorMessage = ''
}

export function logout(state) {
    state.user = null
    state.isLogged = false
}

export function authError(state, error) {
    state.user = null
    state.error = true
    state.isLogged = false
    state.errorMessage = error
}