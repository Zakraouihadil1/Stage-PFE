import { JwtModule } from '@auth0/angular-jwt';
import { BrowserModule } from '@angular/platform-browser';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
/* Components */
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule, } from '@angular/common/http';
import { IndexComponent } from './components/gestion-user/index/index.component';
import { ViewComponent } from './components/gestion-user/view/view.component';
import { CreateComponent } from './components/gestion-user/create/create.component';
import { EditComponent } from './components/gestion-user/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { ErrorComponent } from './components/error/error.component';
import { BlogGridComponent } from './components/blog-grid/blog-grid.component';
import { BlogListingComponent } from './components/blog-listing/blog-listing.component';
import { BlogMasonryComponent } from './components/blog-masonry/blog-masonry.component';
import { PostImageComponent } from './components/post-image/post-image.component';
import { PostGalleryComponent } from './components/post-gallery/post-gallery.component';
import { PostVideoComponent } from './components/post-video/post-video.component';
import { PostRightSidebarComponent } from './components/post-right-sidebar/post-right-sidebar.component';
import { ProjectGridComponent } from './components/project-grid/project-grid.component';
import { ProjectMasonryComponent } from './components/project-masonry/project-masonry.component';
import { ProjectCarousalComponent } from './components/project-carousal/project-carousal.component';
import { ProjectClassic1Component } from './components/project-classic1/project-classic1.component';
import { ProjectClassic2Component } from './components/project-classic2/project-classic2.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { CreateconsultationComponent } from './components/consultation/createconsultation/createconsultation.component';
import { IndexconsultationComponent } from './components/consultation/indexconsultation/indexconsultation.component';
import { ViewconsultationComponent } from './components/consultation/viewconsultation/viewconsultation.component';
import { EditconsultationComponent } from './components/consultation/editconsultation/editconsultation.component';
import { IndexrendezvousComponent } from './components/rendezvous/indexrendezvous/indexrendezvous.component';
import { CreaterendezvousComponent } from './components/rendezvous/createrendezvous/createrendezvous.component';
import { EditrendezvousComponent } from './components/rendezvous/editrendezvous/editrendezvous.component';
import { ViewrendezvousComponent } from './components/rendezvous/viewrendezvous/viewrendezvous.component';
import { IndexprojetComponent } from './components/projet/indexprojet/indexprojet.component';
import { CreateprojetComponent } from './components/projet/createprojet/createprojet.component';
import { EditprojetComponent } from './components/projet/editprojet/editprojet.component';
import { ViewprojetComponent } from './components/projet/viewprojet/viewprojet.component';
import { IndexproduitComponent } from './components/produit/indexproduit/indexproduit.component';
import { CreateproduitComponent } from './components/produit/createproduit/createproduit.component';
import { ViewproduitComponent } from './components/produit/viewproduit/viewproduit.component';
import { EditproduitComponent } from './components/produit/editproduit/editproduit.component';
import { EditcategorieComponent } from './components/categorie/editcategorie/editcategorie.component';
import { IndexcategorieComponent } from './components/categorie/indexcategorie/indexcategorie.component';
import { CreatecategorieComponent } from './components/categorie/createcategorie/createcategorie.component';
import { ViewsouscategorieComponent } from './components/souscategorie/viewsouscategorie/viewsouscategorie.component';
import { IndexsouscategorieComponent } from './components/souscategorie/indexsouscategorie/indexsouscategorie.component';
import { CreatesouscategorieComponent } from './components/souscategorie/createsouscategorie/createsouscategorie.component';
import { EditsouscategorieComponent } from './components/souscategorie/editsouscategorie/editsouscategorie.component';
import { ViewcategorieComponent } from './components/categorie/viewcategorie/viewcategorie.component';
import { IndexconsultationuserComponent } from './components/consultationuser/indexconsultationuser/indexconsultationuser.component';
import { CreateconsultationuserComponent } from './components/consultationuser/createconsultationuser/createconsultationuser.component';
import { ViewconsultationuserComponent } from './components/consultationuser/viewconsultationuser/viewconsultationuser.component';
import { ViewprojetuserComponent } from './components/projetuser/viewprojetuser/viewprojetuser.component';
import { IndexprojetuserComponent } from './components/projetuser/indexprojetuser/indexprojetuser.component';
import { CreateprojetuserComponent } from './components/projetuser/createprojetuser/createprojetuser.component';
import { IndexrendezvoususerComponent } from './components/rendezvoususer/indexrendezvoususer/indexrendezvoususer.component';
import { CreaterendezvoususerComponent } from './components/rendezvoususer/createrendezvoususer/createrendezvoususer.component';
import { ViewrendezvoususerComponent } from './components/rendezvoususer/viewrendezvoususer/viewrendezvoususer.component';
import { DevisuserindexComponent } from './components/devisuser/devisuserindex/devisuserindex.component';
import { DevisusercreateComponent } from './components/devisuser/devisusercreate/devisusercreate.component';
import { DevisuserviewComponent } from './components/devisuser/devisuserview/devisuserview.component';
import { DevisindexComponent } from './components/devis/devisindex/devisindex.component';
import { DeviseditComponent } from './components/devis/devisedit/devisedit.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { FilterPipe } from './shared/filter.pipe';
import { CheckoutComponent } from './components/checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    ErrorComponent,
    BlogGridComponent,
    BlogListingComponent,
    BlogMasonryComponent,
    PostImageComponent,
    PostGalleryComponent,
    PostVideoComponent,
    PostRightSidebarComponent,
    ProjectGridComponent,
    ProjectMasonryComponent,
    ProjectCarousalComponent,
    ProjectClassic1Component,
    ProjectClassic2Component,
    ProjectDetailComponent,
    ServicesComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    CreateconsultationComponent,
    IndexconsultationComponent,
    ViewconsultationComponent,
    EditconsultationComponent,
    IndexrendezvousComponent,
    CreaterendezvousComponent,
    EditrendezvousComponent,
    ViewrendezvousComponent,
    IndexprojetComponent,
    CreateprojetComponent,
    EditprojetComponent,
    ViewprojetComponent,
    IndexproduitComponent,
    CreateproduitComponent,
    ViewproduitComponent,
    EditproduitComponent,
    EditcategorieComponent,
    IndexcategorieComponent,
    CreatecategorieComponent,
    ViewsouscategorieComponent,
    ViewcategorieComponent,
    IndexsouscategorieComponent,
    CreatesouscategorieComponent,
    EditsouscategorieComponent,
    IndexconsultationuserComponent,
    CreateconsultationuserComponent,
    ViewconsultationuserComponent,
    ViewprojetuserComponent,
    IndexprojetuserComponent,
    CreateprojetuserComponent,
    IndexrendezvoususerComponent,
    CreaterendezvoususerComponent,
    ViewrendezvoususerComponent,
    DevisuserindexComponent,
    DevisusercreateComponent,
    DevisuserviewComponent,
    DevisindexComponent,
    DeviseditComponent,
    CartComponent,
    HeaderComponent,
    CheckoutComponent,
  //  FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
  Ng2SearchPipeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function  tokenGetter() {
             return     localStorage.getItem('access_token');},
      //  whitelistedDomains: ['localhost:3000'],
        //blacklistedRoutes: ['http://localhost:3000/auth/login']
      }
    })
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }