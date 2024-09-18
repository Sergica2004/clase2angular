import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [
    { path:"about", component: AboutComponent },
    { path:"contact", component:ContactComponent },
    { path:"home", component:HomeComponent },
    { path:"post", component: PostComponent},
    { path:"form", component: FormComponent},
    { path: "**", redirectTo: "home" }
];
