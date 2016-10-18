function capitalizeWords([text]) {
    console.log(text.replace(/\w+/g, p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase()))
}

capitalizeWords(['Was that Easy? tRY thIs onE for SiZe!'])