package org.nuzhd.currencyapplication.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class Test {

    private final JavaMailSender javaMailSender;

    public Test(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Async()
    public void sendEmail(String to, String email) {
        try {
            MimeMessage msg = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(msg, "utf-8");

            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Подтверждение почты");
            helper.setFrom("sovcomtrade6@gmil.com");


            javaMailSender.send(msg);
        } catch (MessagingException e) {
//            log.error("Failed to send email", e);
            throw new IllegalStateException("Failed to send email");
        }
    }
}
