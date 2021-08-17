import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  realisatorSearchForm!: FormGroup;
  searchedRealisator! : string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.realisatorSearchForm = this.formBuilder.group({
      realisatorName: [null, Validators.required]
    });
  }

  onSubmit() {
    this.searchedRealisator = this.realisatorSearchForm.value.realisatorName;
  }
}
