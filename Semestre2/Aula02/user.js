import { rgFake, namesFake, lastnameFake, emailFake} from "./fakers.js"


export function createUser() {
    let firstName = namesFake()
    let obj = {
        firstName,
        lastName: lastnameFake(),
        rg: rgFake(),
        email: emailFake(firstName)
    }
    return obj
}