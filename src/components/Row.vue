<template>

    <tbody>
    <tr @click="toggleRaw()" class="click-enable">
        <td><a href="#" class="view-row" v-html="(collapsed?'&#9658;':'&#9660;')"></a></td>
        <td>{{block.id}}</td>
        <td>{{block.timestamp}}</td>
        <td v-html="getActionCount(block)"></td>
    </tr>

    <tr v-if="!collapsed">
        <td colspan="4">
           <pre v-bind:style="{ overflow: hidden, display: 'block', width: (window.width - 50) + 'px' }">
               {{block}}
           </pre>
        </td>
    </tr>
    </tbody>

</template>


<script>

    export default {
        data() {
            return {
                collapsed: true,
            }
        },

        props:{
            block: {
                type: Object,
                required: true
            },
            window: {
                type: Object,
                required: true
            },
        },

        methods:{
            getActionCount(block){
                if ( !(block && block instanceof Object && block.transactions && block.transactions.length) ) return 0;
                let count = 0;
                block.transactions.forEach(transaction=>{
                    if(transaction.trx instanceof Object && transaction.trx.transaction && transaction.trx.transaction.actions){
                        count+= transaction.trx.transaction.actions.length;
                    }
                });

                return count;
            },
            toggleRaw(){
                this.collapsed = !this.collapsed;
            }
        }
    };

</script>
