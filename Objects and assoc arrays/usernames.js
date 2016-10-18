function usernames(input) {
    let usernames = new Set()
    input.forEach(username => {
        usernames.add(username)
    })
    usernames = Array.from(usernames).sort((a, b) => {
        if(a.length > b.length) return 1
        if(a.length < b.length) return -1
        if(a > b) return 1
        if(a < b) return -1
        return 0
    })
    console.log(usernames.join('\n'))
}

usernames([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
])