Mail server
===
if you want using Gmail account for sender, you need authentication info.<br>
https://console.developers.google.com/apis<br>
https://developers.google.com/oauthplayground/

start
---
    node index.js
    
Configuration
---
    Port: 5100

End Point
---
    /mail
| End Point | Method |                      Request                    |    Response    |
|-----------|:------:|:-----------------------------------------------:|----------------|
| /mail|  POST  | user,<br>pass,<br>receiver,<br>subject,<br>text |success: Boolean|
