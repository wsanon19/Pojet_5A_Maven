import { Component, OnInit } from '@angular/core';
import { article } from '../article';
import { panierService } from '../panier/panier.servcie';
// import { article } from '../formulaire-article/article';
import { jeanService } from './jean.service';

@Component({
  selector: 'app-jean',
  templateUrl: './jean.component.html',
  styleUrls: ['./jean.component.css']
})
export class JeanComponent implements OnInit {

  public errMsg: string | undefined;
  searchKey:string= " ";

  constructor(private jeanService: jeanService,
    private panierService: panierService) { }

  listeJeans: article[] = [];

  ngOnInit() {
    // this.jeanService.getJean().subscribe({
    //   next: listeJeans => {
    //     this.listeJeans = listeJeans;
    //   },

    //   error: err => this.errMsg = err
    // });

    this.jeanService.getJean().subscribe(
      (listeJeans : article []) => {
        this.listeJeans = listeJeans;
      },

      // error: err => this.errMsg = err
    );

    this.panierService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
}
