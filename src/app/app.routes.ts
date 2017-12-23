import { Routes, RouterModule } from '@angular/router';
import { SignupDataComponent } from './signup-data/signup-data.component';
import { UsersComponent } from './users/users.component';


const routes : Routes = [
    { path: '', redirectTo: 'register', pathMatch:'full' },
    { path:'register', component: SignupDataComponent },
    { path:'user', component: UsersComponent}
]

export const appRouterModule = RouterModule.forRoot(routes);