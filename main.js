import Vue from "vue";
import App from "./components/App.vue";

window.addEventListener("load", function () {
    new Vue({
        el: "#slider",
        render: h => h(App)
    });
});