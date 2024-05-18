package ch.zhaw.myclient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.zhaw.myclient.model.Mail;
import ch.zhaw.myclient.service.MailService;

@RestController
@RequestMapping("/api")
public class MailController {

    @Autowired
    private MailService mailService;  // Stellt sicher, dass der MailService injiziert wird

    /**
     * @param mail
     * @return
     */
    @PostMapping("/send-email")
    public ResponseEntity<?> sendEmail(@RequestBody Mail mail) {
        try {
            mailService.sendMail(mail);
            return new ResponseEntity<>("Email sent successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}