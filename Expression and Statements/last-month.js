function lastMonthDays([day, month, year]) {
    [day, month, year] = [day - 1, month - 1, year].map(Number);

    let date = new Date(year, month, day);
    date = new Date(date.setDate(date.getDate() - day));
    console.log(date.getDate());
}

lastMonthDays(['13','12','2004'])