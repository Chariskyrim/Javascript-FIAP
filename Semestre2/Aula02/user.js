import { rgFake, namesFake, lastnameFake, emailFake} from "./fakers.js"


export function createUser() {
    let obj = {
        firstName: namesFake(),
        lastName: lastnameFake(),
        rg: rgFake(),
        email: emailFake()
    }
    return obj
}