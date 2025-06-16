---
layout: default
title: Table
datatable:true
---

This is the table

<div class="datatable-begin"></div>

| time| sig1A|
|----:|-----:|
|    1|     3|
|    2|     4|

<div class="datatable-end"></div>

<ul>
{% for element in site.data.data %}
	<li>
	{{ element.a }}
	</li>
{% endfor %}
</ul>