<template>
    <div class="login-background">
        <div id="login">
            <p>
                <label for="username">Usuario:</label>
                <input type="text" id="username" name="username" v-model="input.username" placeholder=""/>
            </p>
            <p>
                <label for="password">Contraseña: </label>
                <input type="password" id="password" name="password" v-model="input.password" placeholder=""/>
            </p>
            <p v-if="errors.length">
                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
            <ul>
                <li v-bind:key="error in errors" v-for="error in errors">{{ error }}</li>
            </ul>
            </p>

            <div class="options">
                <button type="button" v-on:click="login()">Ingresar</button>
                <p> o</p>
                <p class="register-title">Crea una cuenta aquí</p>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import { getModule } from "vuex-module-decorators";
    import MainModule from "@/store/modules/mainModule";

    const main = getModule(MainModule);

    export default Vue.extend({
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                },
                errors: []
            }
        },
        methods: {
            login() {
                this.errors = [];
                if (this.input.username != "" && this.input.password != "") {
                    console.log("Correct");
                }
                if (!this.input.username) {
                    // @ts-ignore
                    this.errors.push("El nombre es obligatorio.");
                }
                if (!this.input.password) {
                     // @ts-ignore
                    this.errors.push("La contraseña es obligatoria.");
                }
                if (!this.errors.length) {
                    main.login(this.input.username,this.input.password)
                }
            }
        }

    })
</script>

<style scoped lang="scss">
    #login {
        margin: auto;
        width: 50%;
        input {
            border-radius: 10px;
            border-style: none;
            background-color: #DFDFDF;
            height: 28px;
            width: 200px;
        }
    }

    input, label {
        display: block;
    }

    .login-background {
        width: 50%;
        height: 55%;
        margin: 10%;
        padding: 10%;
        background-color: #ececec;
        border-radius: 50% 50% 50% 50% / 45% 45% 66% 66%;

    }

    .register-title {
        text-align: center;
    }
    .options {
        text-align: center;

        button {
            background-color: #6236FF;
            border-radius: 10px;
            height: 32px;
            width: 120px;
            color: #fff;
            border-style: none;
        }
    }


</style>