function simpleEmailValidation(emails) {
    emails.forEach(email => console.log(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/.test(email) ? 'Valid' : 'Invalid'))
}

simpleEmailValidation(['bobo@abAv.bg'])