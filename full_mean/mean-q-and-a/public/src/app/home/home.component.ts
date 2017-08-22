import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
      private _us: UserService,
      private _qs: QuestionService
  ) { }

  private questions: Array<object>
  private name: String

  ngOnInit() {
      this.getID()
      this.getQuestions()
  }

  getID(){
      this._us.getID()
      .then(data => this.name = data.name)
      .catch(err => console.log(err))
  }

  getQuestions(){
      this._qs.getQuestions()
      .then(data => this.questions = data)
      .catch(err => console.log(err))
  }
}
