<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name : {{ switchName() }}</p>
        <p>User Name : {{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
	import {eventBus} from '../../../../../javascript-ch08-communicate-components-wp'

	export default {
		// props: ['name'],
		props: {
			myName: {
				type: String
			},
			resetFn: Function,
			userAge:Number
		},
		methods: {
			switchName: function() {
				// return this.myName.split("").reverse().join("");
				return this.myName.split("").reverse().join("");
				// return this.myName;
			},
            resetName: function() {
                this.myName = "Max";
                this.$emit('nameWasReset', this.myName);
            }
		},
		created() {
			// eventBus.$on('ageWasReset', function(age){
			// 	this.userAge = age;
			// });
			eventBus.$on('ageWasReset', (age) => {
				console.log("eventBus");
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
