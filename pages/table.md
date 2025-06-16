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
$(document).ready(function() {

	//Columns which filter button
	var filterColumnIndexes = [0, 1];

	//Dynamic table rendering
	var table = $('#datatable').DataTable({

		initComplete: function () {
		
			var api = this.api();
			var thead = $(api.table().header());
			var filterRow = $('<tr>').appendTo(thead);

			api.columns().every(function (colIdx) {
				var column = this;
				var headerText = $(column.header()).text();
				var filterCell = $('<th>').appendTo(filterRow);

				if (filterColumnIndexes.includes(colIdx)) {
					var select = $('<select><option value="">All ' + headerText + '</option></select>')
						.appendTo(filterCell)
						.on('change', function () {
							var val = $(this).val();
							column
								.search(val ? '^' + val + '$' : '', true, false)
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
				} else {
					filterCell.html('&nbsp;');
				}
			});
		}

 	});
 
 });
</script>