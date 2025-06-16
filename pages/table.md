---
layout: default
title: Table
---

This is the table

<!--Static table-->
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
			.columns()
			.every(function () {
				var column = this;
 
				// Create select element and listener
				var select = $('<select><option value="">Show all</option></select>')
				.appendTo($(column.footer()).empty())
				.on('change', function () {
							column
							.search($(this).val(), {exact: true})
							.draw();
				});
 
				// Add list of options
				column
					.data()
					.unique()
					.sort()
					.each(function (d, j) {
						select.append(
							'<option value="' + d + '">' + d + '</option>'
						);
					});
			});
	}
});
</script>