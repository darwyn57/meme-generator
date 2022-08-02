import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CreationMemeOriginalComponent } from './creation-meme-original/creation-meme-original.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';


@NgModule({
  declarations: [
    AppComponent, // Le composant principal de l'application
    AccueilComponent, // Le composant de l'accueil
    CreationMemeOriginalComponent, InscriptionComponent, ConnexionComponent // Le composant de la création de meme original
  ],
  imports: [
    BrowserModule, // Le module de base de l'application
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
