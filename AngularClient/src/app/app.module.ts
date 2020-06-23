import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { ContactComponent } from './contact-container/contact/contact.component';
import { ContactlistComponent } from './contact-container/contactlist/contactlist.component';
import { PaymentContainerComponent } from './payment-container/payment-container.component';
import { PaymentComponent } from './payment-container/payment/payment.component';
import { PaymentlistComponent } from './payment-container/paymentlist/paymentlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactContainerComponent,
    ContactComponent,
    ContactlistComponent,
    PaymentContainerComponent,
    PaymentComponent,
    PaymentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
