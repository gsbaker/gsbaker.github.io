---
layout: post
title: University of Birmingham COVID-19 Cases
modified_date: 2020-12-02
description: A collection of the available University of Birmingham COVID data.  
image: https://blog.gsbaker.uk/img/uob/logo.jpg
author: George Baker
category: university
--- 

**Disclaimer**: I am no longer updating this page.

The University of Birmingham publishes the results from their Test, Trace and Protect 
process [here](https://intranet.birmingham.ac.uk/student/2020/test-and-trace.aspx). 
Unfortunately, the results are not very well publicised, and they only report on the last
seven days. Fortunately, I have kept a track of these figures and have decided to publish
them below:


<table>
  {% for row in site.data.covid-cases %}
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}

    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  {% endfor %}
</table>

---

* Source: [Test, Track and Protect](https://intranet.birmingham.ac.uk/student/2020/test-and-trace.aspx) 
* [Email me](george@gsbaker.uk) about this page
