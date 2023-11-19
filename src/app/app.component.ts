import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'census-bolumbia-ui';
  subtitle = 'Census Bolumbia';
  link = '/';
  buttonText = 'Learn More';
  imageUrl = 'https://picsum.photos/200/300';
  
  contactButtonClick() {
    console.log('Botón "Contact" clickeado');
  }
  // Dentro de la clase AppComponent
  loginButtonClick() {
    console.log('Botón "Login" clickeado');
}
  enviarButtonClick() {
    console.log('Botón "Enviar" clickeado');
}
  volverButtonClick() {
  console.log('Botón "Volver" clickeado');

}
  enterButtonClick() {
  console.log('Botón "Enter" clickeado');
}
// Dentro de la clase AppComponent
  registrarButtonClick() {
  console.log('Botón "Registrar" clickeado');
}

}
