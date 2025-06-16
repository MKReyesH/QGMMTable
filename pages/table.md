---
layout: default
title: Table
---

This is the table

<!--Static database table-->
<table id="datatable" class="display">
{% for row in site.data.database %}
	<!--Table header-->
	<thead>
		{% if forloop.first %}
		<tr>
			{% for pair in row %}
				<th>{{ pair[0] }}</th>
			{% endfor %}
		</tr>
		{% endif %}
	</thead>
	<!--Table rows-->
	{% tablerow pair in row %}
		{{ pair[1] }}
	{% endtablerow %}
{% endfor %}
</table>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/2.3.2/css/dataTables.dataTables.css"/>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<script src="https://cdn.datatables.net/2.3.2/js/dataTables.js"></script>  
<script>
$('#datatable').DataTable();
</script>