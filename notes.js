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
    id: 3,
    subject: 'JavaScript',
    date: '11-16',
    feeling: 'okay',
    timeSpent: '1 day',
}

notes.push(noteAboutToday);

const searchTerm = 'good'

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(`Note ${note.id}
        ${note.date}
        I learned ${note.subject}.
        I spent ${note.timeSpent} working on it.
        I felt ${note.feeling}
        `)
    }
}    