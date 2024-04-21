package ch.zhaw.myclient.model;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PersonCreateDTO {
    private String firstName;
    private String lastName;
    private String email;
}