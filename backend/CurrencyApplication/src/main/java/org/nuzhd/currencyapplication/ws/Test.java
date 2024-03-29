package org.nuzhd.currencyapplication.ws;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class Test {

    private final SimpMessagingTemplate messagingTemplate;

    public Test(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    @Scheduled(fixedRate = 10000)
    public void sendToTopic() {
        messagingTemplate.convertAndSend("/topic/notifications",
                "Test message");
    }
}
