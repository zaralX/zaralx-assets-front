---
sidebar_position: 2
---

# Localization list

Returns localization list.

[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/lang/<locale>`

## Examples
[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/lang/en_us`

```json
{
  "accessibility.onboarding.accessibility.button": "Accessibility Settings...",
  "accessibility.onboarding.screen.narrator": "Press enter to enable the narrator",
  "accessibility.onboarding.screen.title": "Welcome to Minecraft! Would you like to enable the Narrator or visit the Accessibility Settings?",
  "addServer.add": "Done",
  "addServer.enterIp": "Server Address",
  "addServer.enterName": "Server Name",
  "addServer.resourcePack": "Server Resource Packs",
  "addServer.resourcePack.disabled": "Disabled",
  "addServer.resourcePack.enabled": "Enabled"
  ...
}
```

[GET] `https://assets.zaralx.ru/api/v1/minecraft/vanilla/item/apple/lang/UNKNOWN_LANG`

Status: 404

```json
{
  "message": "Unknown lang",
  "lang_keys": String[]
}
```