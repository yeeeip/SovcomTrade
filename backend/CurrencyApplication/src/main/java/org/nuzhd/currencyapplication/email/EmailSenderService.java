package org.nuzhd.currencyapplication.email;

public interface EmailSenderService {

    void sendTo(String to, String token);

}
