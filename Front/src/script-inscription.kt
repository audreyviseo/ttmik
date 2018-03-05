fun declareInscription(){
    defineVue {
        el = "#app"

        data () {
            form = FormInscription()
        }
        methods {
            check = {
                console.log("ok")
            }
            validateEmail = { email:String ->
                Pattern.compile(
                        "^(([\\w-]+\\.)+[\\w-]+|([a-zA-Z]|[\\w-]{2,}))@"
                                + "((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\."
                                + "([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\\.([0-1]?"
                                + "[0-9]{1,2}|25[0-5]|2[0-4][0-9]))|"
                                + "([a-zA-Z]+[\\w-]+\\.)+[a-zA-Z]{2,4})$"
                ).matcher(email).matches()
            }
        }
        computed {
            inputState = { that:dynamic ->
                that.form.login.length > 1 && that.form.login.length<21
            }
            emailState = { that:dynamic ->
                that.form.email.length > 0 && that.form.email.length < 51 && validateEmail(that.form.email)
            }
        }
    }
};

class FormInscription{
    var login=""
    var email=""
    var password=""
    var password2=""
}