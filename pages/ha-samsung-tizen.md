---
Home Assisstant Yotube app run on Tizen OS
---

## Install HACS

## Install Samsung Samrt tv component

Get it here https://github.com/ollo69/ha-samsungtv-smart

## Set integration

Settings -> Devices -> Add Device from Smart Hub

### If default app code not work

Base line code for app using like this 

```yaml
app_list:
  YouTube: "111299001912"
```

on new TV`s try using this ID

```
YouTube: 9Ur5IzDKqV.TizenYouTube
```

Then in HA Dev tools try 
Developer Tools -> Actions ->

Media player: Select source

Use Source Field like ```YouTube```



### Misc

Get Token From Samsung Smart Things https://account.smartthings.com/tokens

Get Device ID from Samsung Smart Things https://my.smartthings.com/advanced/devices