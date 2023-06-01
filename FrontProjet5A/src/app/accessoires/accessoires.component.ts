import { Component, OnInit } from '@angular/core';
import { article } from '../article';
import { panierService } from '../panier/panier.servcie';
import { accessoiresService } from './accessoires.service';

@Component({
  selector: 'app-accessoires',
  templateUrl: './accessoires.component.html',
  styleUrls: ['./accessoires.component.css']
})
export class AccessoiresComponent implements OnInit {

  public errMsg: string | undefined;
  searchKey:string= " ";

  constructor(private accessoireService: accessoiresService,
    private panierService: panierService
    ) { }

  listeAccessoires: article[] = [];

  ngOnInit(): void {
    this.accessoireService.getAccessoires().subscribe({
      next: listeAccessoires => {
        this.listeAccessoires = listeAccessoires;
      },

      error: err => this.errMsg = err
    });

    this.panierService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
}
