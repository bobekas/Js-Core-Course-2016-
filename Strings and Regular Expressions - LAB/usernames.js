function usernames(input) {
    let usernames = []
    input.forEach(email => {
        let [alias, parts] = email.split('@')
        let username = `${alias}.`
        parts = parts.split('.')
        for (let i = 0; i < parts.length; i++) {
            username += parts[i][0]
        }
        usernames.push(username)
    })
    console.log(usernames.join(', '))
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])