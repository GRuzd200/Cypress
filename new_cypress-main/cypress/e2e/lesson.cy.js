describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {                                    
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти и проверить цвет кнопки "забыл пароль"
        cy.get('#mail').type('german@dolnikov.ru');                                    //Найти поле логина и ввести верный логин
        cy.get('#pass').type('iLoveqastudio1');                                        //Найти поле ввода пароля и ввести верный пароль
        cy.get('#loginButton').click();                                                //Найти кнопку входа и нажать на нее
        cy.get('#messageHeader').should('be.visible');                                 //Найти сообщение и убедится, что видно пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');               //Сообщение существует
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Найти крестик и что его видно
    })

    it('Восстановление пароля', function () { 
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти кнопку "забыл пароль" и проверить цвет
        cy.get('#forgotEmailButton').click();                                          //Нажать на кнопку забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');                              //Найти поле ввода почты и ввести почту
        cy.get('#restoreEmailButton').click();                                         //Найти кнопку восстановления пароля и нажать на нее
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');       //Найти сообщение и проверить на соответствие документации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Сообщение видно пользователю
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти кнопку "забыл пароль" и проверить цвет
        cy.get('#mail').type('german@dolnikov.ru');                                    //Найти поле логина и ввести верный логин
        cy.get('#pass').type('iLoveqastudio2');                                        //Найти поле ввода пароля и ввести не верный пароль
        cy.get('#loginButton').click();                                                //Найти кнопку входа и нажать на нее
        cy.get('#messageHeader').should('be.visible');                                 //Найти сообщение и убедится, что видно пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');             //Сообщение существует и соответствует документации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Найти крестик и что его видно
    })

    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти кнопку "забыл пароль" и проверить цвет
        cy.get('#mail').type('gribocheck@dolnikov.ru');                                //Найти поле логина и ввести не верный логин
        cy.get('#pass').type('iLoveqastudio1');                                        //Найти поле ввода пароля и ввести верный пароль
        cy.get('#loginButton').click();                                                //Найти кнопку входа и нажать на нее
        cy.get('#messageHeader').should('be.visible');                                 //Найти сообщение и убедится, что видно пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет');             //Сообщение существует
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Найти крестик и что его видно
    })

    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти кнопку "забыл пароль" и проверить цвет
        cy.get('#mail').type('germandolnikov.ru');                                     //Найти поле логина и ввести верный логин без @
        cy.get('#pass').type('iLoveqastudio');                                         //Найти поле ввода пароля и ввести верный пароль
        cy.get('#loginButton').click();                                                //Найти кнопку входа и нажать на нее
        cy.get('#messageHeader').should('be.visible');                                 //Найти сообщение и убедится, что видно пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');       //Сообщение существует и соответствует документации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Найти крестик и что его видно
    })
    
    it('приведение к строчным буквам', function () {                  
        cy.visit('https://login.qa.studio');                                           //Зайти на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //Найти кнопку "забыл пароль" и проверить цвет
        cy.get('#mail').type('GerMan@Dolnikov.ru');                                    //Найти поле логина и ввести верный логин, добавив заглавные строчки
        cy.get('#pass').type('iLoveqastudio1');                                        //Найти поле ввода пароля и ввести верный пароль
        cy.get('#loginButton').click();                                                //Найти кнопку входа и нажать на нее
        cy.get('#messageHeader').should('be.visible');                                 //Найти сообщение и убедится, что видно пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно');               //Сообщение существует и соответствует документации
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');                 //Найти крестик и что его видно
    })
})


