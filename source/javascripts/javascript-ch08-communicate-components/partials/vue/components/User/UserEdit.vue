<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age : {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
	import {eventBus} from '../../../../../javascript-ch08-communicate-components-wp'

	export default {
		props: ['userAge'],
		methods: {
			editAge: function() {
				// console.log("editAge");
				this.userAge = 30;
				// this.$emit('ageWasReset', this.userAge);
				eventBus.$emit('ageWasReset', this.userAge);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
