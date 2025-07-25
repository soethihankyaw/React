type User = {
    id: number,
    name: string,
    loginId: string,
    password: string
}

function showUser(user: any) {
    console.log(`User Id :: ${user.id}`)
    console.log(`User Name :: ${user.name}`)
    console.log(`User loginId :: ${user.loginId}`)
    console.log(`User password :: ${user.password}`)
}

showUser({id: 1, name:"Soe Thi", loginId:"soethi", password:"12345"})
console.log("")
showUser(10)