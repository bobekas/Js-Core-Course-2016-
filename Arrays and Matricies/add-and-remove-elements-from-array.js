function addOrRemoveElementsFromArray(commands) {
    let array = []
    let count = 0
    commands.forEach(command => runCommand(command))
    array.length !== 0 ? array.forEach(el => console.log(el)) : console.log('Empty')

    function runCommand(command) {
        switch (command) {
            case 'add':
                array.push(++count)
                break
            case 'remove':
                ++count
                array.pop()
                break
            default:
                console.error('Wrong command')
        }
    }
}

addOrRemoveElementsFromArray(['add', 'add', 'remove', 'add'])