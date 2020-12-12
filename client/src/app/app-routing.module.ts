// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { AllocateEditComponent} from './pages/allocate-edit/allocate-edit.component';
import { AllocateListComponent} from './pages/allocate-list/allocate-list.component';
import { FacultyEditComponent} from './pages/faculty-edit/faculty-edit.component';
import { FacultyListComponent} from './pages/faculty-list/faculty-list.component';
import { ProjectEditComponent} from './pages/project-edit/project-edit.component';
import { ProjectListComponent} from './pages/project-list/project-list.component';
import { StudentEditComponent} from './pages/student-edit/student-edit.component';
import { StudentListComponent} from './pages/student-list/student-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'allocates/:id',  loadChildren: './pages/allocate-edit/allocate-edit.module#AllocateEditModule' , canActivate: [AuthGuard] },
    { path: 'allocates',  loadChildren: './pages/allocate-list/allocate-list.module#AllocateListModule' , canActivate: [AuthGuard] },
    { path: 'facultys/:id',  loadChildren: './pages/faculty-edit/faculty-edit.module#FacultyEditModule' , canActivate: [AuthGuard] },
    { path: 'facultys',  loadChildren: './pages/faculty-list/faculty-list.module#FacultyListModule' , canActivate: [AuthGuard] },
    { path: 'projects/:id',  loadChildren: './pages/project-edit/project-edit.module#ProjectEditModule' , canActivate: [AuthGuard] },
    { path: 'projects',  loadChildren: './pages/project-list/project-list.module#ProjectListModule' , canActivate: [AuthGuard] },
    { path: 'students/:id',  loadChildren: './pages/student-edit/student-edit.module#StudentEditModule' , canActivate: [AuthGuard] },
    { path: 'students',  loadChildren: './pages/student-list/student-list.module#StudentListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
