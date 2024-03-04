import { Component } from '@angular/core';
import { AccordionModule } from 'carbon-components-angular/accordion/accordion.module';
import { ButtonModule } from 'carbon-components-angular/button/button.module';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule],
  providers: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

   
}
