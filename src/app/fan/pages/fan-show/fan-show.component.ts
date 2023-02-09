import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FanService } from '../../services/fan.service';
import { Fan } from '../../types/Fan';

@Component({
  selector: 'app-fan-show',
  templateUrl: './fan-show.component.html',
  styleUrls: ['./fan-show.component.scss']
})
export class FanShowComponent {
  
  fan?: Fan

  constructor(
    private _fanService: FanService,
		private _activatedRoute: ActivatedRoute, // Récupère les infos de l'url, notamment les params
		private _router: Router  // Accès aux outils de navigation
  ){}

  // ngOnInit(): void {
  //   // On accède aux paramètre de l'url
  //   const name = this._activatedRoute.snapshot.params['name'];
  //   // PARAMS URL TOUJOURS AU FORMAT STRING
  //   this.fan = this._fanService.getOne(name);
  //   // this.post = this._postsService.getOne(+id);
    
  //   // console.log(this.post);
    
  //   // Si le post est undefined, redirige l'utilisateur
	// 	if (!this.fan) {
	// 		this._router.navigate(['/fan']);
	// 	}
  // }

  ngOnInit(): void {
    // On accède aux paramètre de l'url
    const name = this._activatedRoute.snapshot.params['name'];
    // PARAMS URL TOUJOURS AU FORMAT STRING
    this.fan = this._fanService.getOne(name);
    // this.post = this._postsService.getOne(+id);
    
    // console.log(this.post);
    
    // Si le post est undefined, redirige l'utilisateur
		if (!this.fan) {
			this._router.navigate(['/fan']);
		}
  }
}
