const TOKEN_KEY = "@Series:token";

export const signIn = (usuario)=>{
    localStorage.setItem(TOKEN_KEY, JSON.stringify(usuario) )
}
export const signOut = ()=>{
    localStorage.removeItem(TOKEN_KEY)
}

export const isSignedIn = ()=>{
    const usuario = localStorage.getItem(TOKEN_KEY)
    return JSON.parse(usuario);
}

export const getToken = ()=>{
    const usuario = JSON.parse(localStorage.getItem(TOKEN_KEY))
    console.log("lllllll")
    console.log(usuario)
    console.log("lllllll")
    return usuario.token
}
