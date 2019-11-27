<template>

    <div>

        <header role="navigation" class="navbar bg-dark flex-column flex-md-row navbar-dark navbar-expand">

            <div class="navbar-dark navbar-nav nav-link" to="/">

                <h1 style="color: #fff">block.one</h1>

            </div>

        </header>

        <div v-if="alert.message" :class="`alert ${alert.type}`" v-html="alert.message"></div>

        <router-view></router-view>

    </div>

</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'app',
        computed: {
            ...mapState({
                alert: state => state.alert,
                account: state => state.account,
            }),

        },
        methods: {
            ...mapActions({
                clearAlert: 'alert/clear'
            }),
        },
        watch: {
            $route (to, from){
                // clear alert on location change
                this.clearAlert();
            }
        }
    };
</script>