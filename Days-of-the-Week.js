function week(days) {
    if (days === 0) {return 'shanbe'}
    if (days === 7) {return 'jome'}
    else if (days >= 8) {return 'There is not such day.'}
    return (days - 1) + ' shanbe'
}

console.log(week(5));