---
layout: default
title: Table
---

This is the table

<!--Static table-->
<div id="column-filters" class="dataTables_wrapper"></div>
<table id="datatable" class="display">
	<thead>
		<tr>
			{% for pair in site.data.database[0] %}
				<th>{{ pair[0] }}</th>
			{% endfor %}
		</tr>
	</thead>
	<tbody>
	{% for row in site.data.database %}
		<tr>
			{% for pair in row %}
				<td>{{ pair[1] }}</td>
			{% endfor %}
		</tr>
	{% endfor %}
	</tbody>
</table>

<!--Dynamic table-->
<script>
$('#datatable').DataTable({
	initComplete: function () {
		this.api()
			.columns([0,1])
			.every(function () {
				var column = this;
				var header = column.header();
				var columnIndex = column.index();
				
				var filterContainer = $('<div class="column-filter-item"></div>');
				filterContainer.append('<span>' + $(header).text() + ': </span>');
 
				var select = $('<select><option value="">All</option></select>')
				.appendTo(filterContainer)
				.on('change', function () {
							column
							.search($(this).val(), {exact: true})
							.draw();
				});
				
				column
					.data()
					.unique()
					.sort()
					.each(function (d, j) {
						select.append(
							'<option value="' + d + '">' + d + '</option>'
						);
					});
					
				$('#column-filters').append(filterContainer);
			});
	}
});
</script>