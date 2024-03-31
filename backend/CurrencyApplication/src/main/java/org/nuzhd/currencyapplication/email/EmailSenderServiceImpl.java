package org.nuzhd.currencyapplication.email;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@Service
public class EmailSenderServiceImpl implements EmailSenderService {

    private static final Logger log = LoggerFactory.getLogger(EmailSenderServiceImpl.class);
    private final JavaMailSender javaMailSender;

    @Value("${application.base-path}")
    private String basePath;

    public EmailSenderServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendTo(String to, String token) {
        String content = """
                <!DOCTYPE html>
                <html lang="en">
                                
                <head>
                    <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email Verification</title>
                </head>
                                
                <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #486AA4; color: #fff; text-align: center;">
                    <div style="padding: 20px;">
                        <h2 style="margin-bottom: 20px;">Добро пожаловать в SovcomTrade!</h2>
                        <p style="margin-bottom: 20px;">Спасибо за регистрацию в нашем сервисе. Для продолжения работы подтвердите свою почту</p>
                        <a href="%s" style="background-color: #DA5155; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Подтвердить</a>
                    </div>
                </body>
                                
                </html>
                """.formatted(ServletUriComponentsBuilder.fromCurrentContextPath()
                .build()
                .toUriString() +
                basePath +
                "/auth/confirm?token=" + token);

        sendEmail(to, content);
    }

    @Async
    protected void sendEmail(String to, String email) {
        try {
            MimeMessage msg = javaMailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(msg, "utf-8");

            helper.setText(email, true);
            helper.setTo(to);
            helper.setSubject("Подтверждение почты");
            helper.setFrom("sovcomtrade6@gmil.com");

            javaMailSender.send(msg);
        } catch (MessagingException e) {
            log.error("Failed to send email", e);
            throw new IllegalStateException("Failed to send email");
        }
    }
}
