const view = {};
view.setActiveScreen = (screenName)=> {
    switch (screenName){
        case `MainScreen`:
            document.getElementById(app).innerHTML=components.MainScreen;

            
    }
}
