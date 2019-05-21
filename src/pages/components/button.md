---
path: '/component/button'
title: 'Button'
color: 'green'
published: true
date: '2019-05-16'
keywords: ["anotherone"]
type: ["component", "button"]
---

## Demo

<div class="test-field">
	<button class="c-button">Button</button>
</div>

<button class="c-button">Button</button>
## HTML

```html
<button class="c-button">Button</button>
```
### Modifier Classes

* `html›<button class="c-button c-button--secondary">Button</button>` 

## Sass Variables
```scss
$c-button--disabled: $s-color--button--disabled !default;
$c-button--submit-color:  #f2516b !default; //cep watermellon
$c-button--primary: $s-color--button !default;
$c-button--primary-hover: $s-color--button--hover !default;
$c-button--primary-active: $c-button--primary-hover !default;
$c-button--secondary-color: #000 !default;
$c-button--secondary: $s-color--secondary !default;
$c-button--secondary-hover: darken(desaturate($s-color--secondary, 2.58), 9.22) !default;
$c-button--secondary-active: $c-button--secondary !default;
$c-button--tertiary: $s-color-tertiary !default;
$c-button--tertiary-hover: #fff !default;
$c-button--tertiary-active: $s-color-tertiary !default;
```
<!-- 
* `scss›$c-checkbox--border-color` sets the border color
* `scss›$c-checkbox--active-fill` sets the fill color when checked -->


component varaibles default from colors set in <a href="/settings/color">settings/color.scss</a> 