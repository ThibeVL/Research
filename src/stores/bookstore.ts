// src/stores/bookstore.ts
import { defineStore } from 'pinia'

let idCounter = 0

export interface Book {
  id: number
  title: string
  author: string
}

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [] as Book[],
  }),
  actions: {
    addBook(book: { title: string; author: string }) {
      idCounter++
      this.books.push({
        id: idCounter,
        title: book.title,
        author: book.author,
      })
    },
    removeBook(id: number) {
      this.books = this.books.filter((b) => b.id !== id)
    },
  },
})
