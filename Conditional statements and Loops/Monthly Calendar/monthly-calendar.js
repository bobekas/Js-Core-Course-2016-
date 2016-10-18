let date = new Date()
const today = {
    date: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
}
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function genCalendar(move = 0, id = 'calendar') {
    if(move !== 0) {
        if(move < 0) {
            date = new Date(date.setDate(0))
        } else {
            date = new Date(date.getFullYear(), date.getMonth() + 1, 1)
        }
    }
    [day, month, year] = [date.getDate(), date.getMonth(), date.getFullYear()]

    let firstDayInCurrMonth = new Date(year, month, 1).getDay()
    let lastDayInCurrMonth = new Date(year, month + 1, 0).getDay()

    let prevMonthLength = new Date(year, month, 0).getDate()
    let currMonthLenght = new Date(year, month + 1, 0).getDate()

    let prevMonth = getPrevMonth(firstDayInCurrMonth, prevMonthLength)
    let currMonth = getCurrMonth(currMonthLenght)
    let nextMonth = getNextMonth(6 - lastDayInCurrMonth)

    if(today.year === date.getFullYear() && today.month === date.getMonth()) {
        currMonth[today.date - 1] = `<td class="today">${today.date}</td>`
    }

    let allFormatedDates = [].concat(prevMonth, currMonth, nextMonth)
    let calendarRows = allFormatedDates.length / 7

    let html = '<table width="100%">\n'
    html += `\t<tr><th colspan="7">${monthNames[date.getMonth()]}</th>\n`
    html += '\t<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n'
    let row = ''

    for (let week = 0; week < calendarRows; week++) {
        row = '\t<tr>'
        for (let index = week * 7; index < week * 7 + 7; index++) {
            row += allFormatedDates[index]
        }
        row += '</tr>\n'
        html += row
    }

    html += `\t<tr><td colspan="7"><i>${date.getFullYear()}</i></td></tr>`
    html += '</table>'
    document.getElementById(id).innerHTML = html

    function getPrevMonth(datesCount, currDate) {
        currDate -= datesCount - 1
        return new Array(datesCount).fill(0).map(() => {return `<td class="prev-month">${currDate++}</td>`})
    }
    
    function getCurrMonth(monthLength) {
        let currDate = 1
        return new Array(monthLength).fill(0).map(() => {return `<td>${currDate++}</td>`})
    }

    function getNextMonth(datesCount) {
        let currDate = 1
        return new Array(datesCount).fill(0).map(() => {return `<td class="next-month">${currDate++}</td>`})
    }
}


