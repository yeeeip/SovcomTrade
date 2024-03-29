package org.nuzhd.currencyapplication.ws.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController {

    @MessageMapping("/notifications")
    @SendTo("/topic/notifications")
    public String sendMsg(String message) {
        return message;
    }
}
