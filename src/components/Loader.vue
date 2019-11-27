<template>
    <main role="main" style="width: 100%;">
        <div class="lds-ring" style="position: relative; margin: 20px auto; display: block;"><div></div><div></div><div></div><div></div></div>
    </main>

</template>


<script>

    export default {
        data() {
            return {}
        },
    };

</script>


<style scoped>
    .lds-ring {
        display: inline-block;
        position: relative;
        width: 64px;
        height: 64px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid #c0c0c0;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #c0c0c0 transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>