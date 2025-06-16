---
layout: default
title: Table
---

This is the table

<!--Static database table-->
<table>
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