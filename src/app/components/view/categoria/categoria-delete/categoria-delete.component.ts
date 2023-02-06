import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent {

	categoria: Categoria = {
		id: '',
		name: '',
		description: ''
	}

	constructor( private service: CategoriaService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.categoria.id = this.route.snapshot.paramMap.get('id')!;
		this.findById();
	}

	findById(): void {
		this.service.findById(this.categoria.id!).subscribe((resposta) => {
			this.categoria = resposta;
			console.log(this.categoria);
		})
	}

}
