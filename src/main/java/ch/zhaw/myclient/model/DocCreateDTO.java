package ch.zhaw.myclient.model;

import com.mongodb.lang.NonNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
public class DocCreateDTO {
    @NonNull
    private String docTitle;
    @NonNull
    private String uploadDate;
    @NonNull
    private DocType docType;
    @NonNull
    private String userEmail;
}
