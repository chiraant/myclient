package ch.zhaw.myclient.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@RequiredArgsConstructor
@Setter
@Getter
@Document("doc")
public class Doc {
    @Id
    private String id;
    @NonNull
    private String docTitle;
    @NonNull
    private String uploadDate;
    @NonNull
    private DocType docType;
    @NonNull
    private String userEmail;
}
