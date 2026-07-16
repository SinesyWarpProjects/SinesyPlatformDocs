---
description: >-
  With platform mobile you can schedule local notifications on the device
  without needing to use firebase.
---

# Local notification

## addDelayNotification(notificationTag, delayMS, title, message, actionId, optionalParams)

Set up a notification scheduled in the specified milliseconds

| Argument        | Description                                            |
| --------------- | ------------------------------------------------------ |
| notificationTag | notification unique indentifier                        |
| delayMS         | milliseconds to wait before sending the notification   |
| title           | notification title                                     |
| message         | notification message                                   |
| actionId        | actionId call when user interact with the notification |
| optionalParams  | JSON string passed to the notification action          |

## addPeriodNotification(notificationTag, delayMS, repeatIntervalMS, endDelayMs,  title,  message,  actionId,  optionalParams) \{

Set up a periodic notification scheduled in the specified milliseconds

| Argument         | Description                                            |
| ---------------- | ------------------------------------------------------ |
| notificationTag  | notification unique indentifier                        |
| delayMS          | milliseconds to wait before sending the notification   |
| repeatIntervalMS | every how many milliseconds to repeat the notification |
| title            | notification title                                     |
| message          | notification message                                   |
| actionId         | actionId call when user interact with the notification |
| optionalParams   | JSON string passed to the notification action          |

```
var notificationTag = "test"
var delayMS = 10000
var repeatIntervalMS = 15*60*1000
var endDelayMs = 16*60*1000
var title = "titolo"
var message = "messaggio"
var actionId = "1439"
var optionalParams = JSON.stringify(\{test:132\})

addPeriodNotification(notificationTag, delayMS, repeatIntervalMS, endDelayMs, title, message, actionId, optionalParams)
```

## removePeriodicNotification(notificationTag)

Remove periodic notification&#x20;

## removeAllNotification

Remove all notificaitons
