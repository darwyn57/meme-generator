import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnecteService } from '../connecte.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  public formulaire: FormGroup = new FormGroup(
    {
      email : new FormControl("",[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password : new FormControl("",[Validators.required])
    }
  );



  constructor(
    private client : HttpClient, 
    private connecteService: ConnecteService,
    private router: Router
    ) { }


  

  ngOnInit(): void {    

  }

  onSubmit(){
    if(this.formulaire.valid){
      const headers = new HttpHeaders()
        .set('content-type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');

      this.client.post("http://localhost:4000/connexion",this.formulaire.value,{ headers })
      .subscribe(
        {
          next: (resultat)=>{
            this.connecteService.setConnecte(true)
            this.router.navigateByUrl("/")  
          },
          error: (erreur)=> alert("mauvais login/password")
        }
      )
    }
  }

}
