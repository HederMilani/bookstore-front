import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Categoria } from "../categoria.model";
import { CategoriaService } from "../categoria.service";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent {

  categoria: Categoria = {
    id: "",
    name: "",
    description: "",
  };

  constructor(
    private service: CategoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categoria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
      this.categoria = resposta;
      console.log(this.categoria);
    });
  }

  update(): void {
	this.service.update(this.categoria).subscribe((resposta) => {
		this.service.mensagem("Categoria Atualizada com sucesso!!!");
		this.router.navigate(['categorias']);
	}, err => {
		console.log(err);
	})
  }

  cancel(): void {
	this.router.navigate(['categorias']);
  }
}
