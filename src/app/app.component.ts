import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private list = new TodoList("Adam", [
    new TodoItem("Iść pobiegać", false),
    new TodoItem("Kupić kwiaty"),
    new TodoItem("Odebrać bilet")
  ]);

  get username(): string {
    return this.list.user;
  }


  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
