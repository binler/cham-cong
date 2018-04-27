<template>
	<div>
		<h1>Work Schedule</h1>
		<vue-event-calendar :events="demoEvents"></vue-event-calendar>
	</div>
</template>
<script>
	export default {
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }
}
</script>