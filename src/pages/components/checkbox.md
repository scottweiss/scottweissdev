---
path: '/component/checkbox'
title: 'Checkbox'
color: 'green'
published: true
date: '2019-05-16'
keywords: ["anotherone"]
type: ["component"]
---

## Demo

<div class="test-field">
	<label class="c-checkbox__label">
		<input type="checkbox" class="c-checkbox">
		<span class="c-checkbox__visual"></span>
		<span class="c-checkbox__value">This is a checkbox</span>
	</label>
</div>

<label class="c-checkbox__label">
		<input type="checkbox" class="c-checkbox">
		<span class="c-checkbox__visual"></span>
		<span class="c-checkbox__value">This is a checkbox</span>
	</label>

## HTML

```html
<label class="c-checkbox__label">
	<input type="checkbox" class="c-checkbox">
	<span class="c-checkbox__visual"></span>
	<span class="c-checkbox__value">This is a checkbox</span>
</label>
```

## Sass Variables
```scss
$c-checkbox--border-color: $s-color--border !default;
$c-checkbox--active-fill: $s-color--header !default;
```

* `scss›$c-checkbox--border-color` sets the border color
* `scss›$c-checkbox--active-fill` sets the fill color when checked


component varaibles default from colors set in <a href="/settings/color">settings/color.scss</a> 