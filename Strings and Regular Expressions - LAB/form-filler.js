function formFiller(input) {
    let [username, email, phone] = input.splice(0, 3)
    let placeholders = {
        '!': username,
        '@': email,
        '+': phone
    }
    input.forEach(row => {
        console.log(row.replace(/<![a-zA-Z]*!>|<@[a-zA-Z]*@>|<\+[a-zA-Z]*\+>/g, p => placeholders[p[1]]))
    })
}

formFiller(
    [
        'Pesho',
        'pesho@softuni.bg',
        '90-60-90',
        'Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
    ]
)