import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from "./services/user.service";
import {user} from "./models/user.model";
import { IndexComponent } from '../app/components/gestion-user/index/index.component';
import { ViewComponent } from '../app/components/gestion-user/view/view.component';
import { CreateComponent } from '../app/components/gestion-user/create/create.component';
import { EditComponent } from '../app/components/gestion-user/edit/edit.component';
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

import { IndexcategorieComponent } from './components/categorie/indexcategorie/indexcategorie.component';
import { CreatecategorieComponent } from './components/categorie/createcategorie/createcategorie.component';
import { EditcategorieComponent } from './components/categorie/editcategorie/editcategorie.component';
import { ViewcategorieComponent } from './components/categorie/viewcategorie/viewcategorie.component';

import { ViewsouscategorieComponent } from './components/souscategorie/viewsouscategorie/viewsouscategorie.component';
import { IndexsouscategorieComponent } from './components/souscategorie/indexsouscategorie/indexsouscategorie.component';
import { CreatesouscategorieComponent } from './components/souscategorie/createsouscategorie/createsouscategorie.component';
import { EditsouscategorieComponent } from './components/souscategorie/editsouscategorie/editsouscategorie.component';

import { IndexproduitComponent } from './components/produit/indexproduit/indexproduit.component';
import { CreateproduitComponent } from './components/produit/createproduit/createproduit.component';
import { ViewproduitComponent } from './components/produit/viewproduit/viewproduit.component';
import { EditproduitComponent } from './components/produit/editproduit/editproduit.component';


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
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CommandeComponent } from './components/commande/commande.component';
import { ViewcommandeComponent } from './components/commande/viewcommande/viewcommande.component';
import { CommandeuserindexComponent } from './components/commandeuser/commandeuserindex/commandeuserindex.component';
import { ViewcommandeuserComponent } from './components/commandeuser/viewcommandeuser/viewcommandeuser.component';
import { ProfileadminComponent } from './components/profileadmin/profileadmin.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'user/index', component: IndexComponent },
  { path: 'user/:userId/view', component: ViewComponent },
  { path: 'user/create', component: CreateComponent },
  { path: 'user/:userId/edit', component: EditComponent },


  { path: 'consultation/index', component: IndexconsultationComponent },
  { path: 'consultation/:consultationId/view', component: ViewconsultationComponent },
  { path: 'consultation/create', component: CreateconsultationComponent },
  { path: 'consultation/:consultationId/edit', component: EditconsultationComponent },

  { path: 'consultationuser/index', component: IndexconsultationuserComponent },
  { path: 'consultationuser/:consultationId/view', component: ViewconsultationuserComponent },
  { path: 'consultationuser/create', component: CreateconsultationuserComponent },
 
 
  { path: 'rendezvous/index', component: IndexrendezvousComponent },
  { path: 'rendezvous/:rendezvousId/view', component: ViewrendezvousComponent },
  { path: 'rendezvous/create', component: CreaterendezvousComponent },
  { path: 'rendezvous/:rendezvousId/edit', component: EditrendezvousComponent },

  { path: 'rendezvoususer/index', component: IndexrendezvoususerComponent },
  { path: 'rendezvoususer/:rendezvousId/view', component: ViewrendezvoususerComponent },
  { path: 'rendezvoususer/create', component: CreaterendezvoususerComponent },


  { path: 'projet/index', component: IndexprojetComponent },
  { path: 'projet/:projetId/view', component: ViewprojetComponent },
  { path: 'projet/create', component: CreateprojetComponent },
  { path: 'projet/:projetId/edit', component: EditprojetComponent },

  { path: 'projetuser/index', component: IndexprojetuserComponent },
  { path: 'projetuser/:projetId/view', component: ViewprojetuserComponent },
  { path: 'projetuser/create', component: CreateprojetuserComponent },

  { path: 'devisuser/index', component: DevisuserindexComponent },
  { path: 'devisuser/:devisId/view', component: DevisuserviewComponent },
  { path: 'devisuser/create', component: DevisusercreateComponent },

  { path: 'devis/index', component: DevisindexComponent },
  { path: 'devis/:devisId/edit', component: DeviseditComponent },

  { path: 'categorie/index', component: IndexcategorieComponent },
  { path: 'categorie/:categorieId/view', component: ViewcategorieComponent  },
  { path: 'categorie/create', component: CreatecategorieComponent },
  { path: 'categorie/:categorieId/edit', component: EditcategorieComponent },

  
  { path: 'souscategorie/index', component: IndexsouscategorieComponent },
  { path: 'souscategorie/:souscategorieId/view', component: ViewsouscategorieComponent  },
  { path: 'souscategorie/create', component: CreatesouscategorieComponent },
  { path: 'souscategorie/:souscategorieId/edit', component: EditsouscategorieComponent },

  { path: 'product/index', component: IndexproduitComponent },
  { path: 'product/:productId/view', component: ViewproduitComponent },
  { path: 'product/create', component: CreateproduitComponent },
  { path: 'product/:productId/edit', component: EditproduitComponent },



  
  { path: 'login', component: LoginComponent, } ,
  { path: 'register', component: RegisterComponent } ,
  { path: 'profile', component: ProfileComponent } ,
  { path: 'profileadmin', component: ProfileadminComponent } ,

  { path: 'admin', component: BoardAdminComponent },
  { path: 'user', component: BoardUserComponent },



  { path: 'home', component: HomeComponent } ,
  { path: 'about', component: AboutComponent } ,
  { path: 'contact', component: ContactComponent } ,
  { path: 'faq', component: FaqComponent } ,
  
  { path: 'error', component: ErrorComponent } ,
  { path: 'blogG', component: BlogGridComponent } ,
  { path: 'blogL', component: BlogListingComponent } ,
  { path: 'blogM', component: BlogMasonryComponent } ,

  { path: 'postI', component: PostImageComponent } ,
  { path: 'postV', component: PostVideoComponent } ,
  { path: 'postG', component: PostGalleryComponent } ,

  { path: 'postRS', component: PostRightSidebarComponent } ,
  { path: 'projectCa', component: ProjectCarousalComponent } ,
  { path: 'projectC1', component: ProjectClassic1Component } ,
  { path: 'projectC2', component: ProjectClassic2Component } ,
  { path: 'projectD/:productId/view', component: ProjectDetailComponent } ,
  { path: 'projectG', component: ProjectGridComponent } ,
  { path: 'projectM', component: ProjectMasonryComponent } ,
  { path: 'services', component: ServicesComponent } ,

  { path: 'cart', component: CartComponent } ,
  
  { path: 'checkout', component:CheckoutComponent } ,

  { path: 'commande', component:CommandeComponent } ,
  { path: 'commande/:commandeId/view', component: ViewcommandeComponent },
  { path: 'commandeuser', component:CommandeuserindexComponent } ,
  { path: 'commandeuser/:commandeId/view', component:ViewcommandeuserComponent } ,
  { path: 'forgetpassword', component:ForgetPasswordComponent } ,
  { path: 'updatepassword/:id', component:UpdatePasswordComponent } ,




];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
