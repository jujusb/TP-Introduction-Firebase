import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Book } from '../models/book.model';
import firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() {
    this.getBooks();
  }

  emitBooks(): void {
    this.booksSubject.next(this.books);
  }

  saveBooks(): void {
    // TODO Q6.1
    firebase.database().ref('/books').set(this.books);
  }

  getBooks(): void {
    // TODO Q7
    firebase.database().ref('/books').on('value', (data : DataSnapshot) => {
      this.books = data.val() ? data.val() : [];
      this.emitBooks();
    });
  }

  getSingleBook(id: number): any {
    // TODO Q8 à décommenter
     return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
     );
  }

  createNewBook(newBook: Book): void {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book): void {
    if (book.photo) {
      // TODO Q12.1
       const storageRef = firebase.storage().refFromURL(book.photo);
      // TODO Q12.2 à décomenter
       storageRef.delete().then(
         () => {
           console.log('Photo removed!');
         }
       ).catch(
         (error) => {
           console.log('Could not remove photo! : ' + error);
         }
       );
    }
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if (bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }

  uploadFile(file: File): any {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        //TODO Q11.1
         const upload = firebase.storage().ref()
                  .child("images/" + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement en cours…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            // TODO 11.2
             resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
