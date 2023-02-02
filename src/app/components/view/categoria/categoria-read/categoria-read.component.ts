import { Component } from '@angular/core';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent {
	displayedColumns: string[] = ['id', 'name', 'description', 'action'];
}
