<template lang="html">
	<div>
		<router-link :to="{path:'inputs'}">Inputs</router-link>
		<router-link :to="{path:'selects'}">Selects</router-link>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	data () {
	    return {

		}
	},
}
</script>
<style lang="sass">
	@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Open+Sans+Condensed:300&subset=latin,latin-ext);
	.icon-success {
		color: #5CB85C;
	}
	html {
		font-family: "Open Sans";
		font-size: 14px;
	}

	* {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	pre {
		overflow: auto;

	.string { color: #885800; }
	.number { color: blue; }
	.boolean { color: magenta; }
	.null { color: red; }
	.key { color: green; }
	}

	.control-buttons {
	button {
		margin: 0.2em 0.3em;
		padding: 6px 20px;
		position: relative;

	i {
		margin-right: 0.3em;
	}
	}

	i.fa.fa-warning {
		position: absolute;
		top: 0px;
		right: 0px;
		color: Orange;
	}
	}

	.errors {
	.alert {
		padding: 4px;
		width: 80%;
		margin: 5px auto;
	}
	}

	fieldset.vue-form-generator {

	.form-group.half-width {
		width: 50%;
	}

	.half-width + .half-width {
	&:not(.first) {
		 padding-left: 0.5rem;
	 }
	}

	}

</style>