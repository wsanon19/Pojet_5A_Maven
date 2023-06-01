import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JeanComponent } from './jean/jean.component';
import { RouterModule } from '@angular/router';
import { ManteauComponent } from './manteau/manteau.component';
import { TeeShirtComponent } from './tee-shirt/tee-shirt.component';
import { AccessoiresComponent } from './accessoires/accessoires.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { JeanDetailComponent } from './jean/jean-detail/jean-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { ManteauDetailComponent } from './manteau/manteau-detail/manteau-detail.component';
import { TeeShirtDetailComponent } from './tee-shirt/tee-shirt-detail/tee-shirt-detail.component';
import { AccessoiresDetailComponent } from './accessoires/accessoires-detail/accessoires-detail.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule} from '@angular/material/slider';
import { StartRatingComponent } from './start-rating/start-rating.component';
import { AllArticlesComponent } from './all-articles/all-articles.component';
import { FormulaireArticleComponent } from './formulaire-article/formulaire-article.component';
import { MatRadioModule } from '@angular/material/radio';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PanierComponent } from './panier/panier.component';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { FiterPipe } from './filtre/fiter.pipe';
import { MatPaginatorModule} from '@angular/material/paginator';
import { DarioComponent } from './dario/dario.component';

import { ToastComponent } from './notification/components/toast/toast.component';
import { ToasterComponent } from './notification/components/toaster/toaster.component';
import { CommandeComponent } from './commandes/commande/commande.component';
import { GestionCommandeComponent } from './back_office/gestion.commande/gestion.commande.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    ConnexionComponent,
    ToastComponent, 
    ToasterComponent,
    InscriptionComponent,
    AppComponent,
    NavComponent,
    JeanComponent,
    ManteauComponent,
    TeeShirtComponent,
    AccessoiresComponent,
    DashboardComponent,
    EnteteComponent,
    JeanDetailComponent,
    ManteauDetailComponent,
    TeeShirtDetailComponent,
    AccessoiresDetailComponent,
    StartRatingComponent,
    AllArticlesComponent,
    FormulaireArticleComponent,
    PanierComponent,
    FiterPipe,
    DarioComponent,
    CommandeComponent,
    GestionCommandeComponent,
    FooterComponent,

  ],
  imports: [
    MatPaginatorModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatSelectModule,
    MatBadgeModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      { path: 'jean', component: JeanComponent },
      { path: 'manteau', component: ManteauComponent },
      { path: 'tee-shirt', component: TeeShirtComponent },
      { path: 'accessoires', component: AccessoiresComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: '/dasboard', pathMatch: 'full'},
      { path: 'jean/:id', component: JeanDetailComponent },
      { path: 'manteau/:id', component: ManteauDetailComponent },
      { path: 'tee-shirt/:id', component: TeeShirtComponent},
      { path: 'accessoires/:id', component: AccessoiresComponent},
      { path: 'formulaire-article', component: FormulaireArticleComponent},
      {path : "connexion", component : ConnexionComponent},
      {path : "inscription", component : InscriptionComponent} ,
      {path : "commande/:id", component : CommandeComponent} ,
      {path : "gestion/commande", component : GestionCommandeComponent} ,
      { path: 'panier', component: PanierComponent},
      { path: 'dario', component: DarioComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
