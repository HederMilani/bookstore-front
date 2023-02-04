import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-create",
  templateUrl: "./categoria-create.component.html",
  styleUrls: ["./categoria-create.component.css"],
})
export class CategoriaCreateComponent {
  categoria: Categoria = {
    name: "",
    description: "",
  };

  constructor(private service: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  create(): void {
    this.service.create(this.categoria).subscribe((resposta) => {
		console.log(resposta);
		this.service.mensagem('Categoria Criada Com Sucesso!!!');
		this.router.navigate(['categorias']);
	}, err => {
		for (let i = 0; i < err.error.errors.length; i++) {
			const element = err.error.errors[i].message;
			this.service.mensagem(element);
			
		}
	});
  }
}
