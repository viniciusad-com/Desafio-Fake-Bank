import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recovery-pass',
  templateUrl: './recovery-pass.component.html',
  styleUrls: ['./recovery-pass.component.scss']
})
export class RecoveryPassComponent implements OnInit {

  isLoading: boolean = false;
  isError: boolean = false;

  resetPassForm!: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
