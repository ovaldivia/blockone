<template>

    <div>
        <div class="container-fluid">
            <div class="row">

                <main role="main" v-if="loading" class="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4">
                    <Loader></Loader>
                </main>

                <main role="main" class="col-md-12 ml-sm-auto col-lg-12 pt-3 px-4" v-else>
                    <h1 class="h2">Most Recent Blocks</h1>

                    <div class="table-responsive">

                        <Table :blocks="blocks.list" :window="window"></Table>

                        <div class="form-group mt-4">
                            <b-button class="float-right" @click="reload()">Load</b-button>
                        </div>

                    </div>

                </main>
            </div>

        </div>
    </div>
</template>

<script>
    import Loader from '../../components/Loader';
    import Table from '../../components/Table';
    import Row from '../../components/Row';

    import { mapState, mapActions } from 'vuex';

    export default {
        data () {
            return {
                loading: true,
                window: {
                    width: 0,
                    height: 0
                }
            }
        },
        computed: {
            ...mapState({
                blocks: state => state.blocks.all
            }),
        },

        created () {
            this.getBlockList();
            window.addEventListener('resize', this.handleResize)
            this.handleResize();

        },

        components: {
            'Loader': Loader,
            'Table': Table,
            'Row': Row,
        },

        watch:{
            'blocks.loading':{
                handler(val, oldVal){
                    this.loading = val;
                },
                deep: true
            },
        },
        methods: {
            ...mapActions('blocks', {
                getBlockList: 'getList',
            }),
            reload(){

                this.$router.go();
            },
            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
    };
</script>