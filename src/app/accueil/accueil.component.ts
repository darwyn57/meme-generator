import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public listeMeme:any;
  constructor(private client: HttpClient) { }

  ngOnInit(): void {
    this.raffraichir();
  }
   
  raffraichir(){ this.client.get("http://localhost:4000/memes")
  .subscribe(listeMeme => this.listeMeme = listeMeme)
}

  onClickSupprimer(nomMeme : string){
    this.client.delete("http://localhost:4000/meme/"+nomMeme)
    .subscribe(message => this.raffraichir())
  }

}
