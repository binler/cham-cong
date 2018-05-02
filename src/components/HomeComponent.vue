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
        date: '2018/5/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2018/5/15',
        title: 'Bar',
        desc: 'description',
      }]
    }
  }
}
</script>
