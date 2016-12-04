<template>
    <div class="container">
    	<div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing...</h1>
                <hr/>

                <router-link to="/">Go to Home</router-link>
                <router-link to="/user">Go to User</router-link>
                
                <router-view></router-view>
            </div>
    	</div>
    </div>
</template>

<script>
</script>

<style>
</style>
