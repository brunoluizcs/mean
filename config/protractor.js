exports.config = {
    specs:['../test/e2e/**/*.js'],
    onPrepare: function(){
        browser.driver.get('http://localhost:3000')
            .then(function(){
                browser.driver.findElement(by.id('entrar')).click();           
        /*
                browser.driver.findElement(by.id('login_field')).sendKeys('bruno.luiz88@gmail.com');
                browser.driver.findElement(by.id('password')).sendKeys('positivo88');                        
                browser.driver.findElement(by.name('commit')).click();        
                */
            }); 
        
    }
};

