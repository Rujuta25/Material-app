import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatExpansionModule, MatSnackBarModule, MatListModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports:[MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatExpansionModule, MatSnackBarModule,MatListModule,MatChipsModule],
    exports:[MatButtonModule, MatToolbarModule, MatInputModule, MatCardModule, MatProgressSpinnerModule, MatExpansionModule, MatSnackBarModule, MatListModule, MatChipsModule],

    })

    export class MaterialModule {

    }

