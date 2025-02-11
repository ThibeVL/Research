import { defineStore } from 'pinia';

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [
      { id: 1, title: 'Vue 3 Basics', author: 'Evan You' },
      { id: 2, title: 'Mastering Pinia', author: 'John Doe' }
    ]
  }),
  actions: {
    addBook(book: { title: string; author: string }) {
      this.books.push({ id: Date.now(), ...book });
    },
    removeBook(id: number) {
      this.books = this.books.filter(book => book.id !== id);
    }
  }
});
