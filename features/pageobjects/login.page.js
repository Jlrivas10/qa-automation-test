const { $ } = require('@wdio/globals') 
// Importa la función $ para localizar elementos en el DOM (selector CSS)

const Page = require('./page');
// Importa la clase base Page, donde normalmente vive el método open()

class LoginPage extends Page {

    // Getter para el campo de usuario.
    // Se usa un getter para que cada vez que se llame,
    // WebDriverIO busque el elemento actualizado en el DOM.
    get inputUsername () {
        return $('#user-name'); // Selector real de Sauce Demo
    }

    // Getter para el campo de contraseña
    get inputPassword () {
        return $('#password');
    }

    // Getter para el botón de login
    get btnSubmit () {
        return $('#login-button');
    }

    // Getter para el mensaje de error cuando el login falla
    get errorMessage () {
        return $('[data-test="error"]');
    }

    // Método que encapsula la acción completa de login.
    // Aquí centralizamos el comportamiento en un solo lugar.
    // Si mañana cambia la forma de loguearse,
    // solo modificamos este método.
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // Método para abrir la página.
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
// Exportamos una instancia lista para usar en los steps

