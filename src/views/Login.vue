<template>
    <div class="login-background">
        <div id="login">
            Chappie
            <div class="fields">
                <p>
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" v-model="input.username" placeholder=""/>
                </p>
                <p>
                    <label for="password">Contraseña: </label>
                    <input type="password" id="password" name="password" v-model="input.password" placeholder=""/>
                </p>
            </div>
            <p v-if="errors.length" class="errors-detail">
                <b>Por favor, corrija los siguientes errores:</b>
            <ul>
                <li v-bind:key="error in errors" class="errors-detail-li" v-for="error in errors">{{ error }}</li>
            </ul>
            </p>

            <div class="options">
                <button type="button" v-on:click="login()">Ingresa</button>
                <p> o</p>
                <p class="register-title" @click="goToRegister">Crea una cuenta aquí</p>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import {getModule} from "vuex-module-decorators";
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
                    main.login(this.input.username, this.input.password)
                }
                if (!this.input.username) {
                    // @ts-ignore
                    this.errors.push("El nombre de usuario es obligatorio.");
                }
                if (!this.input.password) {
                    // @ts-ignore
                    this.errors.push("La contraseña es obligatoria.");
                }
                if (!this.errors.length) {
                    main.login(this.input.username, this.input.password)
                }
            },
            goToRegister(){
                this.$router.push('/Singin')
            }
        }

    })
</script>

<style scoped lang="scss">
    .login-background {
        background: rgb(255, 255, 255);
        background: -moz-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(246, 246, 246) 63%, rgb(237, 237, 237) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgb(255, 255, 255)), color-stop(63%, rgb(246, 246, 246)), color-stop(100%, rgb(237, 237, 237)));
        background: -webkit-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(246, 246, 246) 63%, rgb(237, 237, 237) 100%);
        background: -o-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(246, 246, 246) 63%, rgb(237, 237, 237) 100%);
        background: -ms-linear-gradient(top, rgb(255, 255, 255) 0%, rgb(246, 246, 246) 63%, rgb(237, 237, 237) 100%);
        background: linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(246, 246, 246) 63%, rgb(237, 237, 237) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed', GradientType=0);
        width: 33%;
        height: 40%;
        margin: 2% auto auto;
        padding: 10%;
        border-radius: 50% 50% 50% 50% / 45% 45% 66% 66%;

        #login {
            margin: auto;
            width: 50%;
            text-align: center;

            .fields {
                text-align: left;

                label {
                    color: $color-primary;
                }

                input {
                    border-radius: 5px;
                    border-style: none;
                    background-color: #DFDFDF;
                    height: 22px;
                    width: 100%;
                    padding: 4px;

                    &:focus {
                        outline: none;
                    }
                }
            }

            .errors-detail {
                font-size: 12px;
            }

            .errors-detail-li {
                font-size: 12px;
                text-align: left;
                color: #ff4b5c;
            }

            .options {
                text-align: center;

                button {
                    background-color: $color-primary;
                    border-radius: 7px;
                    height: 32px;
                    font-weight: 500;
                    width: 120px;
                    color: #fff;
                    font-size: 19px;
                    border-style: none;

                    &:hover {
                        cursor: pointer;
                    }
                }

                p {
                    color: $color-primary;
                }

            }
        }

    }
    .register-title {
        &:hover {
            cursor: pointer;
        }
    }


</style>