---
layout: default
title: Table
---

This is the table

<ul>
{% for element in site.data.data %}
	<li>
	{{ element.a }}
	</li>
{% endfor %}
</ul>