<template>

    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th></th>
            <th>Hash</th>
            <th>Timestamps</th>
            <th>Action Count</th>
        </tr>
        </thead>

        <Row v-for="block in blocks" :window="window" :block="block"></Row>
    </table>

</template>


<script>
    import Row from './Row';

    export default {
        data() {
            return {}
        },

        props:{
            blocks: {
                type: Array,
                required: true
            },
            window: {
                type: Object,
                required: true
            },
        },

        components: {
            Row
        },
    };

</script>
