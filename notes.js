const notes = [
    {
        id: 1,
        subject: 'HTML',
        date: '11-9',
        feeling: 'good',
        timeSpent: '1 Week',
    },
    {
        id: 2,
        subject: 'CSS',
        date: '11-10',
        feeling: 'alright',
        timeSpent: '1 Week',
    }
]

const noteAboutToday = {
    subject: 'JavaScript',
    date: '11-16',
    feeling: 'okay',
    timeSpent: '1 day',
}

const createNote = (array, date, subject) => {
    item = {
        id: array.length + 1, 
        name: date,
        sunject: subject,
        dateCreated: Date()
    }
    array.push(item)
    return item
}

createNote(notes, "11-16", "JavaScript")

console.log(notes)
