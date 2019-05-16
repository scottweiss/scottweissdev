---
path: '/settings/color'
title: 'Color'

published: true
date: '2019-05-16'
keywords: ["color"]
type: ["setting"]
---
```scss
$s-color--primary: #f2516b !default;
$s-color--secondary: #409892 !default;
$s-color--header: #664d4c !default;
$s-color--body:#555555 !default;
$s-color--link: #407499 !default;
$s-color--link--hover: #007bbe !default;
$s-color--link--disabled: #bbbbbb !default;
$s-color--button: #0a4d66 !default;
$s-color--button--hover: #003c54 !default;
$s-color--button--disabled: #e3e3e3 !default;
$s-color--secondary-control:#f9f5ef !default ;
$s-color--icon: #a0b0bf !default;
$s-color--data-vis: #4eb9b1 !default;
$s-color--ghost: #777777 !default;
$s-color--border: #d1cdc8 !default;
$s-color--disabled-text: #bbbbbb !default;
```

colors have been taken from https://zpl.io/VkprvG5 and are set as defaults for the product. To make modifications on the client level, copy and paste into the start of a new theme.scss file in the client super repo, eg:

```scss
//theme.scss
$client-brand-color: red;
$client-body-copy-color: green;  //gross

$s-color--primary: $client-brand-color;
$s-color--body: $client-body-copy-color;
```