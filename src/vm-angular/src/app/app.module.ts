import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LinkyModule } from 'angular-linky';

// custom modules
import { AppRoutingModule } from './app-routing/app-routing.module';

// custom services/interceptors
import { AuthInterceptor } from './auth/auth.interceptor';

// custom components
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { CommentComponent } from './comment/comment.component';
import { CommentcreateComponent } from './comment/commentcreate/commentcreate.component';
import { CommentlistComponent } from './comment/commentlist/commentlist.component';
import { ReplycreateComponent } from './comment/commentlist/replycreate/replycreate.component';
import { MysteryComponent } from './mystery/mystery.component';
import { ReleaseViewComponent } from './mystery/release-view/release-view.component';
import { NotFoundComponent } from './not-found.component';
import { ReleaseListComponent } from './mystery/release-list/release-list.component';
import { ArtifactViewComponent } from './artifact-view/artifact-view.component';
import { TAComponent } from './ta/ta.component';

import { ResultViewComponent } from './mystery/release-view/result-view/result-view.component';
import { GradesComponent } from './grades/grades.component';
import { TaInstructionsComponent } from './ta-instructions/ta-instructions.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { MustMatchDirective } from './auth/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    LogoutComponent,
    CommentComponent,
    CommentcreateComponent,
    CommentlistComponent,
    ReplycreateComponent,
    NotFoundComponent,
    MysteryComponent,
    ReleaseViewComponent,
    ReleaseListComponent,
    ArtifactViewComponent,
    TAComponent,

    ResultViewComponent,

    GradesComponent,

    TaInstructionsComponent,

    ChangePasswordComponent,

    MustMatchDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LinkyModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
