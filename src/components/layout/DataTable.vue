<template>
	<div>
		<code>query: {{ query }}</code>
		<datatable v-bind="$data" />
	</div>
</template>
<script type="text/babel">
	export default {
		data: () => ({
			columns: [
				{ title: 'Дата', field: 'date', sortable: true },
				{ title: 'Ресурс', field: 'res_name' },
				{ title: 'Потребление по ОДУ', field: 'total', sortable: true },
				{ title: 'Сумма потребления по квартирам', field: 'sum' }
			],
			data: [],
			total: 0,
			query: { "limit": 10, "offset": 0, "sort": "", "order": "" }
		}),
		created: function() {
			Vue.axios.post('/consumption?type=2')
				.then(response => {
					this.data = response.data
				})
				.catch(error => {
					console.log(error.response)
				})

		}
	}
</script>