import Vue from "vue";
import { extend, localize, ValidationObserver, ValidationProvider } from "vee-validate";
import { required, email, min, confirmed } from "vee-validate/dist/rules";
import es from "vee-validate/dist/locale/es.json";

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install confirmed rule.
extend("confirmed", confirmed);


// Install Spanish localizations.
localize({   
    es: {
        messages: es.messages,
    }
});

localize('es');
