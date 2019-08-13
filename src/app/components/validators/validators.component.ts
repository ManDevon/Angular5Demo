import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Action } from '@ngrx/store';

@Component({
  selector: 'form-validator',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.scss']
})
export class ValidatorComponent implements OnInit {
  name: string
  score: number;
  formData: any;

  constructor() { }

  ngOnInit() {
      this.formData = new FormGroup({
          name: new FormControl(this.name, Validators.compose([
              Validators.required,
            ])),
            score: new FormControl(this.score, Validators.compose([
                Validators.required,
                this.scoreValueValidator
            ]))
        });
  }

  scoreValueValidator(control: FormControl): any {
    if (control.value < 0 || control.value > 100) {
      return { value: {info: '分数必须大于等于0，小于等于100'} };
    }
  }

  onsubmit(data: any) {
    this.name= data.name;
    this.score = data.score
  }

}