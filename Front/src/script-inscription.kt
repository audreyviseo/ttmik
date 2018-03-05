fun declareInscription(){
    defineVue {
        el = "#app"

        data () {
            form = FormInscription()
        }
        methods {
            print = {
                console.log("ok")
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