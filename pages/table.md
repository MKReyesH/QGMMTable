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
    var table = $('#datatable').DataTable({
        // You might want to adjust other DataTables options here, e.g.:
        // "paging": true,
        // "ordering": true,
        // "info": true,
        // "searching": true, // This is for the global search box, column filters are separate
        initComplete: function () {
            var api = this.api(); // Get the DataTables API instance

            // Get the <thead> element of the table
            var thead = $(api.table().header());

            // Create a new <tr> element for the filter row
            // We append it to the <thead>
            var filterRow = $('<tr>').appendTo(thead);

            // Iterate over ALL columns to create a corresponding <th> in the new filter row
            api.columns().every(function (colIdx) {
                var column = this;
                var headerText = $(column.header()).text(); // Get the original header text (e.g., "Name")

                // Create a <th> element for the current column's filter and append it to the new filterRow
                var filterCell = $('<th>').appendTo(filterRow);

                // Check if this is one of the columns we want to filter (index 0 for first, 1 for second)
                if (colIdx === 0 || colIdx === 1) {
                    // Create the select element for this column
                    // The first option value is empty to act as "All"
                    var select = $('<select><option value="">All ' + headerText + '</option></select>')
                        .appendTo(filterCell) // Append the select to the newly created <th>
                        .on('change', function () {
                            var val = $(this).val(); // Get the selected value

                            // Apply the search to the current column
                            // '^' + val + '$' ensures an exact match for the whole cell content
                            // true enables regex, false disables smart search
                            column
                                .search(val ? '^' + val + '$' : '', true, false)
                                .draw(); // Redraw the table to apply the filter
                        });

                    // Populate the select dropdown with unique, sorted data from this column
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
                    // For columns that don't need a filter, just keep the <th> empty
                    // You can add '&nbsp;' if you need to ensure it takes up space even when empty
                    filterCell.html('&nbsp;');
                }
            });
        }
    });
});
</script>