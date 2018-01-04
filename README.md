Mail server
===
This server using naver.com.<br>
If you want use this server, you have to configurate about smtp configuration on sender's mail account.<br>

And if you want using Gmail account for sender, you need authentication info.<br>
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
    /send-mail
| End Point | Method |                      Request                    |    Response    |
|-----------|:------:|:-----------------------------------------------:|----------------|
| /send-mail|  POST  | user,<br>pass,<br>receiver,<br>subject,<br>text |success: Boolean|
