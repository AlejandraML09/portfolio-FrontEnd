import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditHeaderDialogComponent } from './components/modals/edit-header-dialog/edit-header-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { EditExperienceDialogComponent } from './components/modals/edit-experience-dialog/edit-experience-dialog.component';
import { EditEducationDialogComponent } from './components/modals/edit-education-dialog/edit-education-dialog.component';
import { SkillComponent } from './components/skill/skill.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditAboutMeComponent } from './components/modals/edit-about-me/edit-about-me.component';
import { LoginDialogComponent } from './components/modals/login-dialog/login-dialog.component';
import { PortfolioListComponent } from './components/portfolio-list/portfolio-list.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AddExperienceDialogComponent } from './components/modals/add-experience-dialog/add-experience-dialog.component';
import { AddEducationDialogComponent } from './components/modals/add-education-dialog/add-education-dialog.component';
import { AddSkillDialogComponent } from './components/modals/add-skill-dialog/add-skill-dialog.component';
import { EditSkillsDialogComponent } from './components/modals/edit-skills-dialog/edit-skills-dialog.component';
import { AddProjectDialogComponent } from './components/modals/add-project-dialog/add-project-dialog.component';
import { EditProjectDialogComponent } from './components/modals/edit-project-dialog/edit-project-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ExperienceComponent,
    ProjectsComponent,
    PortfolioComponent,
    EditHeaderDialogComponent,
    EditExperienceDialogComponent,
    EditEducationDialogComponent,
    SkillComponent,
    NavbarComponent,
    EditAboutMeComponent,
    LoginDialogComponent,
    PortfolioListComponent,
    SpinnerComponent,
    AddExperienceDialogComponent,
    AddEducationDialogComponent,
    AddSkillDialogComponent,
    EditSkillsDialogComponent,
    AddProjectDialogComponent,
    EditProjectDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }],
  bootstrap: [AppComponent]
})


export class AppModule { }
