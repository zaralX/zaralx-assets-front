---
sidebar_position: 1
---

# Name

Returns localized item name.

[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/<item_id>/lang/<locale>/name`

## Examples
[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/apple/lang/en_us/name`

```text
Apple
```

[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/apple/lang/ru_ru/name`

```text
Яблоко
```

[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/UNKNOWN_ITEM/lang/ru_ru/name`

Status: 404

```json
{
  "message": "Not found item name"
}
```