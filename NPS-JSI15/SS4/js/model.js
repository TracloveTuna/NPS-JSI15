const model = {};
model.currentUser = undefined;

// giao tiếp với server
model.register = async (data) => {
    // set upfirebase
    try {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
        //dòng này cần thời gian phản hồi từ file base-> oahnr hồi xong mới chạy code dưới
        firebase.auth().currentUser.updateProfile({
            displayName: data.firstName + " " + data.lastName
        });

        //gửi email về xác thực
        firebase.auth().currentUser.sendEmailVerification();
        alert("email has been registed, please check your email for verification");
        //hiển thị dao giện đăng nhập
        view.setActiveScreen("loginScreen");

    }
    catch (err) {

        console.log(err);
        alert(err.message)
    }
}


model.login = async (dataLogin) => {
    try{
        const response = await firebase.auth().signInWithEmailAndPassword(dataLogin.email, dataLogin.password);

        if(response.user.emailVerified == false){
            alert("M chưa xác minh email r");

        }
        else{
            model.currentUser={
                displayName: response.user.displayName,
                email: response.user.email,

    }


            view.setActiveScreen("homeScreen")
        }
    }
    catch(err){
        console.log(err);
        if(err.code==`auth/uset-not-found`|| err.code=="auth/invalid email"){
            document.getElementById("email-error").innerText=`${err.message}`;
            
        }
        else if(err.code="auth/wrong-password"){
            document.getElementById("password-error").innerText=`${err.message}`;
        }
    }
}