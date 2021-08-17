import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { realisatorsList } from 'src/data/realisators1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  realisatorSearchForm!: FormGroup;
  realisators!: String[];
  realisatorName = new FormControl();
  searchedRealisator! : string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.realisators = realisatorsList;
    this.realisatorSearchForm = this.formBuilder.group({
      realisatorName: [null, Validators.required]
    });
  }

  onSubmit() {
    this.searchedRealisator = this.realisatorSearchForm.value.realisatorName;
  }
}
