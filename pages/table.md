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
$('#datatable').DataTable()
</script>