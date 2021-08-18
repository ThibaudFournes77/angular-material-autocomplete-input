import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { realisatorsList } from 'src/data/realisators1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  realisatorSearchForm!: FormGroup;
  realisators!: string[];
  realisatorName = new FormControl();
  filteredRealisators!: Observable<string[]>;
  searchedRealisator! : string;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.realisators = realisatorsList;
    this.realisatorSearchForm = this.formBuilder.group({
      realisatorName: [null, Validators.required]
    });
    this.filteredRealisators = this.realisatorName.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  
    return this.realisators.filter(realisator => realisator.toLowerCase().includes(filterValue));
  }

  onRealisatorSelected(option: MatOption) {
    this.realisatorSearchForm.get('realisatorName')?.setValue(option.value);
  }

  onSubmit() {
    this.searchedRealisator = this.realisatorSearchForm.value.realisatorName;
  }
}
