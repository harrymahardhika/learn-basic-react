let todo = {
  id: 1,
  task: 'Learn TypeScript',
  completed: false,
}

let books = [
  { id: 1, title: 'Learn TypeScript', published: 2023 },
  { id: 2, title: 'Learn Express', published: 2023 },
  { id: 3, title: 'Learn React', published: 2023 },
]

let updatebooks = books.map((book) => {
  if (book.id === 1) {
    return { ...book, title: 'Learn Angular' }
  }
  return book
})

let undeletedBooks = books.filter((book) => book.id !== 1)

console.log(updatebooks)
console.log(undeletedBooks)

// console.log({
//   ...todo,
//   task: 'Learn Express',
// })
