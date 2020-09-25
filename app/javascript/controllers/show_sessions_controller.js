// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import Rails from '@rails/ujs';


export default class extends Controller {
  static targets = [ "card" ]

  connect() {
    console.log("coucou");
  }

  show(event) {
    // "localhost:3000/users/1234"
    // split("/") -> ["localhost:3000", "users", "1234"]
    // console.log("hello");
   const user = window.location.pathname.split("/")[2];
   const date = event.currentTarget.dateObj;
   const dateStyle = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    // "https://localhost:3000/sessions/fetch?user=1234&date=1999-03-12"
    // const url = `${window.location.origin}/sessions/fetch`;
    // console.log(user);
    // console.log(url);

  Rails.ajax({
    type: "post",
    url: "/sessions/fetch",
    data: new URLSearchParams({
      user: user,
      date: dateStyle
    }).toString(),
    success: this.display.bind(this),
    error: (data) => { console.log(data) }
  })
}

  display(data) {
    this.cardTarget.innerHTML = data.html;
  }
}
